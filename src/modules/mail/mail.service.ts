import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { PrismaService } from '@db/prisma.service';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService, private readonly prismaService: PrismaService) { }

  async _processSendEmail(to, subject, text): Promise<void> {
    await this.mailerService.sendMail({
      to: to,
      subject: subject,
      text: text
    })
      .then(() => {
        console.log('Email sent');
      })
      .catch((e) => {
        console.log('Error sending email', e);
      });
  }

  async sendMail(data: any) {
    const { to, subject, text, html = '', cc = [] } = data
    return await this.mailerService.sendMail({
      to: to,
      from: 'tranquiruta4@gmail.com',
      subject: subject,
      text: text,
      cc: cc,
      html,

    })
  }

  async sendNotificationEmail(data: { zoneId?: number, eventId?: number }, subject: string, text: string) {
    let users: any[] = [];

    if (data.zoneId) {
      // Buscar usuarios dentro de la zona segura específica
      users = await this.getUsersInZone(data.zoneId);
      
      // Enviar emails a usuarios en la zona segura
      for (const user of users) {
        const zoneSubject = `🛡️ ${subject}`;
        const zoneText = `${text}\n\n. Mantente alerta y sigue las recomendaciones de seguridad.`;
        await this._processSendEmail(user.correo, zoneSubject, zoneText);
      }
    }

    if (data.eventId) {
      // Buscar usuarios cerca del evento (dentro de 100 metros)
      users = await this.getUsersNearEvent(data.eventId);
      
      // Enviar emails a usuarios cerca del evento
      for (const user of users) {
        const eventSubject = `⚠️ ${subject} - Alerta de Evento Cercano`;
        const eventText = `${text}\n\nSe ha detectado un evento cerca de tu ubicación (menos de 100 metros). Por favor, toma las precauciones necesarias.`;
        console.log(`Enviando email a ${user.correo} sobre evento ${data.eventId}`);
      }
    }

    return {
      message: 'Notificaciones enviadas',
      usersNotified: users.length,
      users: users.map(u => ({ id: u.id_usuario, email: u.correo }))
    };
  }

  private async getUsersInZone(zoneId: number): Promise<any[]> {
    // Consulta PostGIS para encontrar usuarios dentro de la zona
    // Convertimos geography a geometry para usar ST_Within
    const users = await this.prismaService.$queryRaw`
      SELECT u.id_usuario, u.correo
      FROM usuarios u
      JOIN zonas_seguras z ON z.id_zona = ${zoneId}
      WHERE u.posicion_actual IS NOT NULL
        AND z.area IS NOT NULL
        AND ST_Within(u.posicion_actual::geometry, z.area::geometry)
    `;
    
    return users as any[];
  }

  private async getUsersNearEvent(eventId: number): Promise<any[]> {
    // Consulta PostGIS para encontrar usuarios dentro de 100 metros del evento
    // ST_DWithin trabaja bien con geography, pero agregamos verificación explícita
    const users = await this.prismaService.$queryRaw`
      SELECT u.id_usuario, u.correo,
             ST_Distance(u.posicion_actual, e.ubicacion) as distancia_metros
      FROM usuarios u
      CROSS JOIN eventos e
      WHERE e.id_evento = ${eventId}
        AND u.posicion_actual IS NOT NULL
        AND e.ubicacion IS NOT NULL
        AND ST_DWithin(u.posicion_actual, e.ubicacion, 100)
      ORDER BY distancia_metros ASC
    `;
    
    return users as any[];
  }

  async getUsersInZoneInfo(zoneId: number) {
    // Método público para obtener información de usuarios en zona
    const users = await this.getUsersInZone(zoneId);
    const zoneInfo = await this.prismaService.zonas_seguras.findUnique({
      where: { id_zona: zoneId },
      select: { nombre: true, descripcion: true }
    });

    return {
      zone: zoneInfo,
      usersCount: users.length,
      users: users.map(u => ({
        id: u.id_usuario,
        email: u.correo
      }))
    };
  }

  async getUsersNearEventInfo(eventId: number) {
    // Método público para obtener información de usuarios cerca de eventos
    const users = await this.getUsersNearEvent(eventId);
    const eventInfo = await this.prismaService.eventos.findUnique({
      where: { id_evento: eventId },
      include: { tipo_evento: true }
    });

    // Extraer coordenadas del campo geography
    const locationData = await this.prismaService.$queryRaw`
      SELECT ST_Y(ubicacion::geometry) as lat, ST_X(ubicacion::geometry) as lng
      FROM eventos
      WHERE id_evento = ${eventId}
        AND ubicacion IS NOT NULL
    ` as any[];

    const coordinates = locationData[0] || { lat: null, lng: null };

    return {
      event: {
        id: eventInfo?.id_evento,
        type: eventInfo?.tipo_evento?.nombre,
        description: eventInfo?.descripcion,
        location: { lat: coordinates.lat, lng: coordinates.lng }
      },
      usersCount: users.length,
      users: users.map(u => ({
        id: u.id_usuario,
        name: `${u.nombre} ${u.apellido}`,
        email: u.correo,
        distanceMeters: Math.round(u.distancia_metros)
      }))
    };
  }

  async sendEmailToUser(userId: number, subject: string, text: string) {
    const user = await this.prismaService.usuarios.findUnique({ where: { id_usuario: userId } });
    if (user && user.correo) {
      return this._processSendEmail(user.correo, subject, text);
    }
  }
}
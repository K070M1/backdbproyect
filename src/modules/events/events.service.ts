import { Injectable } from '@nestjs/common';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) { }

  async create(createEventDto: any) {
    const { id_tipo_evento, descripcion, id_usuario, lat, lng } = createEventDto;
    const result = await this.prisma.$queryRaw`
      INSERT INTO eventos (id_tipo_evento, descripcion, id_usuario, ubicacion)
      VALUES (${id_tipo_evento}, ${descripcion}, ${id_usuario}, ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326))
      RETURNING *;
    `;
    return result[0];
  }

  async findAll() {
    return await this.prisma.$queryRaw`
      SELECT e.id_evento, e.id_tipo_evento, e.descripcion, e.created_at AS fecha_registro,
        ST_X(e.ubicacion::geometry) AS lng, ST_Y(e.ubicacion::geometry) AS lat,
        t.nombre AS tipo_nombre
      FROM eventos e
      JOIN tipo_evento t ON e.id_tipo_evento = t.id_tipo_evento`
  }

  findOne(id: number) {
    return this.prisma.$queryRaw`
      SELECT e.id_evento, e.id_tipo_evento, e.descripcion, e.created_at AS fecha_registro,
        ST_X(e.ubicacion::geometry) AS lng, ST_Y(e.ubicacion::geometry) AS lat,
        t.nombre AS tipo_nombre
      FROM eventos e
      JOIN tipo_evento t ON e.id_tipo_evento = t.id_tipo_evento
      WHERE e.id_evento = ${id}
    `;
  }

  update(id: number, updateEventDto: any) {
    return this.prisma.$queryRaw`
      UPDATE eventos
      SET id_tipo_evento = ${updateEventDto.id_tipo_evento},
          descripcion = ${updateEventDto.descripcion},
          ubicacion = ST_SetSRID(ST_MakePoint(${updateEventDto.lng}, ${updateEventDto.lat}), 4326),
          id_usuario = ${updateEventDto.id_usuario}
      WHERE id_evento = ${id}
    `;
  }

  remove(id: number) {
    return this.prisma.eventos.delete({ where: { id_evento: id } });
  }
}

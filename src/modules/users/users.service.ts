import {
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '@db/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto, avatarFileName?: string) {
    const existing = await this.prisma.usuarios.findFirst({
      where: { correo: data.correo },
    });

    if (existing) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(data.clave, 10);

    const res = await this.prisma.usuarios.create({
      data: {
        ...data,
        clave: hashedPassword,
        rol: data.rol || 'usuario',
        activo: true,
        avatar_url: avatarFileName ? `/uploads/avatars/${avatarFileName}` : null,
      },
    });
    return res;
  }

  findAll() {
    return this.prisma.usuarios.findMany({ where: { activo: true } });
  }

  findOne(id: number) {
    return this.prisma.usuarios.findFirst({
      where: { id_usuario: id },
    });
  }

  async createRouteSecure(body: any) {
    const { origen, destino, radio_evento = 500 } = body;
    const origenWKT = `POINT(${origen.lon} ${origen.lat})`;
    const destinoWKT = `POINT(${destino.lon} ${destino.lat})`;

    return this.prisma.$queryRawUnsafe(
      `
      WITH ruta AS (
        SELECT
          ST_MakeLine(
            ST_GeomFromText($1, 4326),
            ST_GeomFromText($2, 4326)
          )::geography AS geom
      )
      SELECT
        z.id_zona,
        z.nombre,
        z.descripcion,
        ST_AsText(z.area) AS area_wkt
      FROM zonas_seguras z, ruta r
      WHERE
        z.inseguro = false
        AND ST_DWithin(r.geom, z.area, $3)
        AND ST_Intersects(z.area, r.geom)
        AND NOT EXISTS (
          SELECT 1 FROM eventos e
          WHERE ST_DWithin(r.geom, e.ubicacion, $3)
        );
    `,
      origenWKT,
      destinoWKT,
      radio_evento,
    );
  }

  findByLogin(email: string) {
    return this.prisma.usuarios.findFirst({
      where: { correo: email },
    });
  }

  async update(id: number, data: UpdateUserDto) {
    if (data.clave) {
      data.clave = await bcrypt.hash(data.clave, 10);
    }

    return this.prisma.usuarios.update({
      where: { id_usuario: id },
      data,
    });
  }

  async remove(id: number) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    const dependencias = await this.prisma.eventos.findMany({
      where: { id_usuario: id },
      take: 1,
    });

    if (dependencias.length > 0) {
      return this.prisma.usuarios.update({
        where: { id_usuario: id },
        data: { activo: false },
      });
    }

    return this.prisma.usuarios.delete({
      where: { id_usuario: id },
    });
  }

  async saveLocation(id: number, lat: number, lon: number) {
    const usuario = await this.findOne(id);
    if (!usuario) {
      throw new NotFoundException('Usuario no encontrado');
    }

    return this.prisma.$queryRaw`
      UPDATE usuarios
      SET posicion_actual = ST_SetSRID(ST_MakePoint(${lon}, ${lat}), 4326)
      WHERE id_usuario = ${id}
    `;
  }
}

import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class RoutesService {
  constructor(private prisma: PrismaService) {}

  create(createRouteDto: CreateRouteDto) {
    return this.prisma.rutas.create({
      data: {
        id_usuario: createRouteDto.id_usuario,
        id_origen: createRouteDto.id_origen,
        id_destino: createRouteDto.id_destino,
        riesgo: createRouteDto.riesgo ?? null,
        tiempo_estimado: createRouteDto.tiempo_estimado ?? null,
        favorito: createRouteDto.favorito ?? false,
      },
    });
  }

  async findAll() {
    return this.prisma.$queryRaw`
      SELECT r.*, 
        u1.nombre as origen, 
        u1.descripcion as origen_direccion,
        u2.nombre as destino,
        u2.descripcion as destino_direccion
      FROM rutas r 
      JOIN ubicaciones u1 ON r.id_origen = u1.id_ubicacion 
      JOIN ubicaciones u2 ON r.id_destino = u2.id_ubicacion
    `;
  }

  async findOne(id: number) {
    const result = await this.prisma.$queryRaw`
      SELECT r.*, 
        u1.nombre as origen, 
        u1.descripcion as origen_direccion,
        u1.latitud as origen_lat,
        u1.longitud as origen_lng,
        u2.nombre as destino,
        u2.descripcion as destino_direccion,
        u2.latitud as destino_lat,
        u2.longitud as destino_lng
      FROM rutas r 
      JOIN ubicaciones u1 ON r.id_origen = u1.id_ubicacion 
      JOIN ubicaciones u2 ON r.id_destino = u2.id_ubicacion
      WHERE r.id_ruta = ${id}
    `;

    return result[0] || null;
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.prisma.rutas.update({
      where: { id_ruta: id },
      data: {
        id_origen: updateRouteDto.id_origen,
        id_destino: updateRouteDto.id_destino,
        riesgo: updateRouteDto.riesgo,
        tiempo_estimado: updateRouteDto.tiempo_estimado,
        favorito: updateRouteDto.favorito,
      },
    });
  }

  remove(id: number) {
    return this.prisma.rutas.delete({
      where: { id_ruta: id },
    });
  }
}

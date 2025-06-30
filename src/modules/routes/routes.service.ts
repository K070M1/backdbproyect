import { Injectable } from '@nestjs/common';
import { CreateRouteDto } from './dto/create-route.dto';
import { UpdateRouteDto } from './dto/update-route.dto';
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class RoutesService {
  constructor(private prisma:PrismaService){}

  create(createRouteDto: CreateRouteDto) {
    return this.prisma.rutas.create({
      data: createRouteDto
    })
  }

  async findAll() {
    return await this.prisma.$queryRaw`
      SELECT r.*, u1.nombre as origen, u2.nombre as destino 
      FROM rutas r 
      JOIN ubicacion u1 ON r.id_origen = u1.id_ubicacion 
      JOIN ubicacion u2 ON r.id_destino = u2.id_ubicacion`;
  }

  findOne(id: number) {
    return this.prisma.rutas.findUnique({
      where: { id_ruta: id }
    });
  }

  update(id: number, updateRouteDto: UpdateRouteDto) {
    return this.prisma.rutas.update({
      where: { id_ruta: id },
      data: updateRouteDto
    });
  }

  remove(id: number) {
    return this.prisma.rutas.delete({
      where: { id_ruta: id }
    });
  }
}

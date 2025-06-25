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

  findAll() {
    return this.prisma.rutas.findMany();
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

import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateLocationDto) {
    return this.prisma.ubicaciones.create({ data });
  }

  findAll() {
    return this.prisma.ubicaciones.findMany({
      include: {
        usuarios: true
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ubicaciones.findUnique({
      where: { id_ubicacion: id },
      include: {
        usuarios: true
      },
    });
  }

  findByCoordinates(lat: number, lng: number) {
    return this.prisma.ubicaciones.findFirst({
      where: {
        latitud: lat,
        longitud: lng,
      },
      include: {
        usuarios: true
      },
    });
  }

  async findObj(params: { latitud: number; longitud: number }) {
    return await this.prisma.ubicaciones.findFirst({
      where: {
        latitud: params.latitud,
        longitud: params.longitud,
      },
    });
  }

  update(id: number, data: UpdateLocationDto) {
    return this.prisma.ubicaciones.update({
      where: { id_ubicacion: id },
      data,
    });
  }

  async remove(id: number) {
    const ubicacion = await this.prisma.ubicaciones.findUnique({
      where: { id_ubicacion: id },
    });

    if (!ubicacion) {
      throw new NotFoundException('Ubicación no encontrada');
    }

    return this.prisma.ubicaciones.delete({
      where: { id_ubicacion: id },
    });
  }
}

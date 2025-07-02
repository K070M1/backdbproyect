import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/db/prisma.service';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateLocationDto) {
    return this.prisma.ubicacion.create({ data });
  }

  findAll() {
    return this.prisma.ubicacion.findMany({
      include: {
        usuarios: true,
        rutas_rutas_id_destinoToubicacion: true,
        rutas_rutas_id_origenToubicacion: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.ubicacion.findUnique({
      where: { id_ubicacion: id },
      include: {
        usuarios: true,
        rutas_rutas_id_destinoToubicacion: true,
        rutas_rutas_id_origenToubicacion: true,
      },
    });
  }

  findByCoordinates(lat: number, lng: number) {
    return this.prisma.ubicacion.findFirst({
      where: {
        latitud: lat,
        longitud: lng,
      },
      include: {
        usuarios: true,
        rutas_rutas_id_destinoToubicacion: true,
        rutas_rutas_id_origenToubicacion: true,
      },
    });
  }

  async findObj(params: { latitud: number; longitud: number }) {
    return await this.prisma.ubicacion.findFirst({
      where: {
        latitud: params.latitud,
        longitud: params.longitud,
      },
    });
  }

  update(id: number, data: UpdateLocationDto) {
    return this.prisma.ubicacion.update({
      where: { id_ubicacion: id },
      data,
    });
  }

  async remove(id: number) {
    const ubicacion = await this.prisma.ubicacion.findUnique({
      where: { id_ubicacion: id },
    });

    if (!ubicacion) {
      throw new NotFoundException('Ubicación no encontrada');
    }

    return this.prisma.ubicacion.delete({
      where: { id_ubicacion: id },
    });
  }
}

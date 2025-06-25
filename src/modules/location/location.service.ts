import { Injectable } from '@nestjs/common';
import { CreateLocationDto } from './dto/create-location.dto';
import { UpdateLocationDto } from './dto/update-location.dto';
import { PrismaService } from 'src/db/prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}
  create(createLocationDto: any) {
    return this.prisma.ubicacion.create({
      data: createLocationDto,
    });
  }

  findAll() {
    return this.prisma.ubicacion.findMany();
  }
  
  findObj(obj:any) {
    return this.prisma.ubicacion.findFirst({
      where: obj,
    });
  }

  findOne(id: number) {
    return this.prisma.ubicacion.findUnique({
      where: { id_ubicacion: id },
    });
  }

  update(id: number, updateLocationDto: UpdateLocationDto) {
    return this.prisma.ubicacion.update({
      where: { id_ubicacion: id },
      data: updateLocationDto,
    });
  }

  remove(id: number) {
    return this.prisma.ubicacion.delete({
      where: { id_ubicacion: id },
    });
  }
}

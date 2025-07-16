import { Injectable } from '@nestjs/common';
import { CreateCalificationDto } from './dto/create-calification.dto';
import { UpdateCalificationDto } from './dto/update-calification.dto';
import { PrismaService } from '@db/prisma.service';


@Injectable()
export class CalificationService {
  constructor(private prisma: PrismaService) {}

  create(createCalificationDto: CreateCalificationDto) {
    return this.prisma.calificaciones.create({
      data: createCalificationDto,
    });
  }

  findAll() {
    return this.prisma.calificaciones.findMany({
      include: {
        usuarios: true
      },
    });
  }

  findOne(id: number) {
    return this.prisma.calificaciones.findUnique({
      where: { id_calificacion: id },
    });
  }

  update(id: number, updateCalificationDto: UpdateCalificationDto) {
    return this.prisma.calificaciones.update({
      where: { id_calificacion: id },
      data: updateCalificationDto,
    });
  }

  remove(id: number) {
    return this.prisma.calificaciones.delete({
      where: { id_calificacion: id },
    });
  }
}

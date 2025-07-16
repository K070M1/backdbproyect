import { Injectable } from '@nestjs/common';
import { CreateTypeEventDto } from './dto/create-type-event.dto';
import { UpdateTypeEventDto } from './dto/update-type-event.dto';
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class TypeEventService {
  constructor(private prisma:PrismaService){}

  create(createTypeEventDto: any) {
    return this.prisma.tipo_evento.create({
      data: createTypeEventDto
    });
  }

  findAll() {
    return this.prisma.tipo_evento.findMany();
  }

  findOne(id: number) {
    return this.prisma.tipo_evento.findUnique({
      where: { id_tipo_evento: id }
    });
  }

  update(id: number, updateTypeEventDto: UpdateTypeEventDto) {
    return this.prisma.tipo_evento.update({
      where: { id_tipo_evento: id },
      data: updateTypeEventDto
    });
  }

  remove(id: number) {
    return this.prisma.tipo_evento.delete({
      where: { id_tipo_evento: id }
    });
  }
}

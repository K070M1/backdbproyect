import { Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { PrismaService } from '@db/prisma.service';

@Injectable()
export class ZonesService {
  constructor(private prisma: PrismaService) {}
  create(createZoneDto: any) {
    return this.prisma.zonas_seguras.create({
      data: createZoneDto,
    });
  }

  findAll() {
    return this.prisma.zonas_seguras.findMany();
  }

  findOne(id: number) {
    return this.prisma.zonas_seguras.findUnique({
      where: { id_zona: id },
    });
  }

  update(id: number, updateZoneDto: UpdateZoneDto) {
    return this.prisma.zonas_seguras.update({
      where: { id_zona: id },
      data: updateZoneDto,
    });
  }

  remove(id: number) {
    return this.prisma.zonas_seguras.delete({
      where: { id_zona: id },
    });
  }
}

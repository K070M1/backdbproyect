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

  async create(data: CreateUserDto) {
    const existing = await this.prisma.usuarios.findUnique({
      where: { correo: data.correo },
    });

    if (existing) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(data.clave, 10);

    return this.prisma.usuarios.create({
      data: {
        ...data,
        clave: hashedPassword,
        rol: data.rol || 'usuario',
        activo: true,
      },
    });
  }

  findAll() {
    return this.prisma.usuarios.findMany({ where: { activo: true } });
  }

  findOne(id: number) {
    return this.prisma.usuarios.findUnique({
      where: { id_usuario: id },
    });
  }

  findByLogin(email: string) {
    return this.prisma.usuarios.findUnique({
      where: { correo: email },
    });
  }

  update(id: number, data: UpdateUserDto) {
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

  async consulta() {
    return await this.prisma.$queryRaw`SELECT * FROM usuarios`;
  }
}

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

  async create(data: CreateUserDto, avatarFileName?: string) {
    const existing = await this.prisma.usuarios.findFirst({
      where: { correo: data.correo },
    });

    if (existing) {
      throw new BadRequestException('El correo ya está registrado');
    }

    const hashedPassword = await bcrypt.hash(data.clave, 10);

    const res = await this.prisma.usuarios.create({
      data: {
        ...data,
        clave: hashedPassword,
        rol: data.rol || 'usuario',
        activo: true,
        avatar_url: avatarFileName ? `/uploads/avatars/${avatarFileName}` : null,
      },
    });
    return res;
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
    return this.prisma.usuarios.findFirst({
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
    return this.prisma.$queryRaw`SELECT * FROM usuarios`;
  }
}

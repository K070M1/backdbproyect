import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/db/prisma.service'

@Injectable()
export class UsersService {
  constructor(private prisma:PrismaService){}

  create(obj: any) {
    return this.prisma.usuarios.create({
      data: obj
    })
  }

  findAll() {
    return this.prisma.usuarios.findMany()
  }

  findOne(id: any) {
    return this.prisma.usuarios.findUnique({
      where: { "id_usuario": +id },
    })
  }

  findByLogin(email: string) {
    return this.prisma.usuarios.findUnique({ where: { "correo": email }});
  }

  update(id: any, obj: any) {
    return this.prisma.usuarios.update({
      where: { "id_usuario": +id },
      data: obj
    })
  }

  remove(id: any) {
    return this.prisma.usuarios.delete({
      where: { "id_usuario": +id}
    })
  }

  async consulta(){
    const registros = await this.prisma.$executeRaw`SELECT * FROM usuarios`
    return registros
  }
}

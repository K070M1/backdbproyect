import { Body, Controller, Get, Res, Post, Req, Query, UseInterceptors, UploadedFiles, NotFoundException } from '@nestjs/common';
import { Response} from 'express'
import { JwtService } from '@nestjs/jwt'
import { UsersService } from '../users/users.service'
import * as bcrypt from 'bcryptjs'

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService
  ) { }
  
  @Post('login')
  async login(@Body() body: any, @Res() res: Response, @Req() req: Request){
    const userFound = await this.userService.findByLogin(body.correo)
    if (!userFound) return res.status(400).json({ message: "Correo no encontrado" });
    const validate = await bcrypt.compare(body.clave, userFound.clave);
    if (!validate) return res.status(400).json({ message: "Contraseña incorrecta" });
    const token = await this.jwtService.signAsync({ id: userFound.id_usuario, rol: userFound.rol });
    res.json({
      token,
      id: userFound?.id_usuario,
      user: userFound?.nombre_usuario,
      email: userFound.correo,
      rol: userFound?.rol
    })
  }

  @Post('register')
  async register(@Body() body: any, @Req() req: Request){
    const passEncrip = await bcrypt.hash(body.clave.toString(), 10);
    const userg = await this.userService.create({...body, clave: passEncrip})
    return userg;
  }

}
import {
  Body,
  Controller,
  Post,
  BadRequestException,
  Get,
  Res,
  Req,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcryptjs';
import { Response, Request } from 'express';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UsersService,
  ) {}

  @Post('login')
  async login(
    @Body() body: { correo: string; clave: string },
    @Res() res: Response,
  ) {
    const userFound = await this.userService.findByLogin(body.correo);
    if (!userFound) throw new BadRequestException('Correo no encontrado');

    const isValid = await bcrypt.compare(body.clave, userFound.clave);
    if (!isValid) throw new BadRequestException('Contraseña incorrecta');

    const token = await this.jwtService.signAsync({
      id: userFound.id_usuario,
      rol: userFound.rol,
    });

    res.cookie('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 30 * 24 * 60 * 60 * 1000, // 30 días
    });

    return res.json({
      id: userFound.id_usuario,
      user: userFound.nombre_usuario,
      email: userFound.correo,
      rol: userFound.rol,
    });
  }

  @Post('logout')
  async logout(@Res() res: Response) {
    res.clearCookie('token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return res.json({ message: 'Sesión cerrada' });
  }

  @Get('me')
  async me(@Req() req: Request) {
    const token = req.cookies['token'];
    if (!token) throw new BadRequestException('Token no enviado');

    const payload = await this.jwtService.verifyAsync(token);
    const user = await this.userService.findOne(payload.id);
    if (!user) throw new BadRequestException('Usuario no encontrado');

    return {
      id: user.id_usuario,
      user: user.nombre_usuario,
      email: user.correo,
      rol: user.rol,
    };
  }
}

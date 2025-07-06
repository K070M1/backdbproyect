import { NextFunction, Request, Response } from 'express';
import { JwtService } from '@nestjs/jwt';

const jwtService = new JwtService({
  secret: process.env.TOKEN_SECRET || 'default'
});

export async function TokenMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.cookies?.token;
  if (!token) {
    req['user'] = null;
    return next();
  }

  try {
    const decoded = await jwtService.verifyAsync(token);
    req['user'] = decoded; // Aquí tienes el payload del token desencriptado
  } catch (err) {
    req['user'] = null;
  }
  next();
}
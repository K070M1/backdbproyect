import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Middleware para leer cookies httpOnly (req.cookies['token'])
  app.use(cookieParser());

  // Configuración de CORS para frontend (con envío de cookies)
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Prefijo global para la API
  app.setGlobalPrefix('api');

  // Validaciones automáticas con DTOs
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Iniciar servidor
  await app.listen(5000);

  console.log('✅ Backend iniciado en http://localhost:5000/api');
}
bootstrap();

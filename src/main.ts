import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // Middleware para cookies
  app.use(cookieParser());
  // CORS para frontend
  app.enableCors({
    origin: process.env.NEXT_PUBLIC_FRONTEND_URL,
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Prefijo para rutas privadas
  app.setGlobalPrefix('api');

  // Validaciones con DTOs
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // Rutas públicas: sirve archivos estáticos (ej: avatares)
  app.useStaticAssets(join(__dirname, '..', 'uploads'), {
    prefix: '/public/', // URL pública: http://localhost:5000/public/filename.jpg
  });

  const port = process.env.PORT;
  await app.listen(port);

  console.log(`✅ Backend iniciado en http://localhost:${port}/api`);
  console.log(`🌐 Archivos públicos en http://localhost:${port}/public`);
}

bootstrap();

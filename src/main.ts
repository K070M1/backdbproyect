import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
    app.enableCors({ 
      allowedHeaders: ["*"], 
      origin: true,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"]
    });
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new ValidationPipe({transform: true}));
  await app.listen(5001);
}
bootstrap();

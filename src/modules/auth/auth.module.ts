import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    JwtModule.registerAsync({
      useFactory: () => ({
        global: true,
        secret: process.env.TOKEN_SECRET,
        signOptions: { expiresIn: '30d' },
      }),
    }),
    UsersModule,
  ],
  controllers: [AuthController],
})
export class AuthModule {}

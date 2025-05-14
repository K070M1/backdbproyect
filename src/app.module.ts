import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './db/prisma.module'
import { AuthModule } from './modules/auth/auth.module'

@Module({
  imports: [
    PrismaModule, 
    UsersModule,
    AuthModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

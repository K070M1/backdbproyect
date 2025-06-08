import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './db/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { RoutesModule } from './modules/routes/routes.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule,
    AuthModule,
    RoutesModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './db/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { RoutesModule } from './modules/routes/routes.module';
import { TypeEventModule } from './modules/type-event/type-event.module';
import { EventsModule } from './modules/events/events.module';
import { LocationModule } from './modules/location/location.module';

@Module({
  imports: [
    PrismaModule, 
    UsersModule,
    AuthModule,
    RoutesModule,
    TypeEventModule,
    EventsModule,
    LocationModule,
    
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

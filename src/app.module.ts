import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './db/prisma.module'
import { AuthModule } from './modules/auth/auth.module'
import { RoutesModule } from './modules/routes/routes.module';
import { TypeEventModule } from './modules/type-event/type-event.module';
import { EventsModule } from './modules/events/events.module';
import { LocationModule } from './modules/location/location.module';
import { CalificationModule } from './modules/calification/calification.module';
import { ZonesModule } from './modules/zones/zones.module';

import { TokenMiddleware } from './middlewares/token.middleware'

@Module({
  imports: [
    PrismaModule, 
    UsersModule,
    AuthModule,
    RoutesModule,
    TypeEventModule,
    EventsModule,
    LocationModule,
    CalificationModule,
    ZonesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(TokenMiddleware).forRoutes('*');
  }
}
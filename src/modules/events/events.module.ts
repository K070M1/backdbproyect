import { Module } from '@nestjs/common';
import { EventsService } from './events.service';
import { EventsController } from './events.controller';
import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [MailModule],
})
export class EventsModule {}

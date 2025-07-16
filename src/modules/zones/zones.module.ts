import { Module } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { ZonesController } from './zones.controller';

import { MailModule } from '../mail/mail.module';

@Module({
  controllers: [ZonesController],
  providers: [ZonesService],
  imports: [MailModule],
})
export class ZonesModule {}

//app.module.ts
import { Module } from '@nestjs/common';
import { MailerModule } from '@nestjs-modules/mailer';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
          user: "tranquirutas4@gmail.com",
          pass: "htus yawi bbsr they"
        }
      },
      defaults: {
        from: '"Alertas" <tranquirutas4@gmail.com>',
      },
      options: {
        logger: true,
        debug: true,
      },

    })
  ],
  controllers: [MailController],
  providers: [MailService],
  exports: [MailService]
})
export class MailModule { }
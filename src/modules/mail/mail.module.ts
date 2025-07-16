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
          user: "TU_USUARIO_DE_GMAIL",
          pass: "TU_CONTRASENA_DE_APLICACION_GMAIL"
        }
      },
      defaults: {
        from: '"Alertas" <TU_USUARIO_DE_GMAIL>',
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
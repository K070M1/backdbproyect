import { MailService } from './mail.service';

import { Body, Controller, Post, Req, Get } from '@nestjs/common';
import { join } from 'path';
import * as fs from 'fs'

@Controller('mail')
export class MailController {
  constructor(
    private readonly mailService: MailService,
  ) { }

  @Post('process')
  async _processSendEmail(@Body() body: any, @Req() req: Request) {
    const { to, subject, text } = body;
    try {
      let result = await this.mailService._processSendEmail(to, subject, text);
      return result

    } catch (error) {
      console.log("error", error)
    }
  }
}

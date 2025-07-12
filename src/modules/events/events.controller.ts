import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { EventsService } from './events.service';
import { Request } from 'express'

import { MailService } from '../mail/mail.service';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService, private readonly mailService: MailService) {}

  @Post()
  async create(@Body() createEventDto: any, @Req() req: Request) {
    const user = req?.['user'];
    if(user) createEventDto.id_usuario = parseInt(user.id) || 1;
    const res = await this.eventsService.create(createEventDto);
    if(res && res.id_evento) {
      const subject = 'Nuevo Evento Registrado';
      const text = `Se ha registrado un nuevo evento: ${createEventDto.descripcion}`;
      await this.mailService.sendNotificationEmail({ eventId: res.id_evento }, subject, text);
    }
    return res;
  }

  @Get()
  findAll() {
    return this.eventsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventsService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEventDto: any) {
    const obj = {
      id_tipo_evento: parseInt(updateEventDto?.tipo),
      descripcion: updateEventDto?.descripcion,
      fecha_registro: updateEventDto?.fecha_registro || new Date(),
      lat: updateEventDto?.lat,
      lng: updateEventDto?.lng
    }
    return this.eventsService.update(+id, obj);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventsService.remove(+id);
  }
}

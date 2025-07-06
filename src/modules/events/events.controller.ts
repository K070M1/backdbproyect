import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { EventsService } from './events.service';
import { Request } from 'express'

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: any, @Req() req: Request) {
    const user = req?.['user'];
    if(user) createEventDto.id_usuario = parseInt(user.id) || 1;
    return this.eventsService.create(createEventDto);
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

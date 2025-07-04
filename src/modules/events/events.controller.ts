import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Controller('events')
export class EventsController {
  constructor(private readonly eventsService: EventsService) {}

  @Post()
  create(@Body() createEventDto: CreateEventDto) {
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
      //id_usuario: parseInt(updateEventDto?.id_usuario) || 1, // Default user ID if not provided
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

import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { CalificationService } from './calification.service';
import { CreateCalificationDto } from './dto/create-calification.dto';
import { UpdateCalificationDto } from './dto/update-calification.dto';
import { Request } from 'express'


@Controller('calification')
export class CalificationController {
  constructor(private readonly calificationService: CalificationService) {}

  @Post()
  create(@Body() createCalificationDto: any, @Req() req: Request) {
    if(req?.['user']) {
      createCalificationDto.id_usuario = parseInt(req?.['user'].id) || 1;
    }
    return this.calificationService.create(createCalificationDto);
  }

  @Get()
  findAll() {
    return this.calificationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.calificationService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCalificationDto: UpdateCalificationDto) {
    return this.calificationService.update(+id, updateCalificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.calificationService.remove(+id);
  }
}

import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { ZonesService } from './zones.service';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { Request } from 'express'

import { MailService } from '../mail/mail.service';

@Controller('zones')
export class ZonesController {
  constructor(private readonly zonesService: ZonesService, private readonly mailService: MailService) {}

  @Post()
  async create(@Body() createZoneDto: any, @Req() req: Request) {
    if(req?.['user']) createZoneDto.id_usuario = req?.['user'].id;

    const res = await this.zonesService.create(createZoneDto);
    if(res && res.id_zona) {
      const subject = `Nueva Zona ${res.inseguro ? 'Insegura' : 'Segura'} Registrada`;
      const text = `Se ha registrado una nueva zona: ${createZoneDto.descripcion}`;
      await this.mailService.sendNotificationEmail({ zoneId: res.id_zona }, subject, text);
    }
    return res;
  }

  @Get()
  findAll() {
    return this.zonesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.zonesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateZoneDto: UpdateZoneDto) {
    return this.zonesService.update(+id, updateZoneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.zonesService.remove(+id);
  }
}

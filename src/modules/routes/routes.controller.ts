import { Controller, Get, Post, Body, Put, Param, Delete, Req } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { LocationService } from '../location/location.service';
import { UpdateRouteDto } from './dto/update-route.dto';
import { Request } from 'express';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly routesService: RoutesService,
    private readonly locationService: LocationService,
  ) {}

  @Post()
  async create(@Body() createRouteDto: any, @Req() request: Request) {
    const {
      origenCoords,
      destinoCoords,
      origen: origenB,
      destino: destinoB,
      origenAddress,
      destinoAddress,
      ...requst
    } = createRouteDto;

    const user = request?.['user'];
    if(user) requst.id_usuario = parseInt(user.id) || 1;

    const origen = await this.locationService.findByCoordinates(
      origenCoords.lat,
      origenCoords.lng,
    );

    if (origen) {
      requst.id_origen = origen.id_ubicacion;
    } else {
      requst.id_origen = (
        await this.locationService.create({
          latitud: origenCoords.lat,
          longitud: origenCoords.lng,
          nombre: origenB || 'Origen Desconocido',
          descripcion: origenAddress || '',
          id_usuario: requst.id_usuario,
        })
      ).id_ubicacion;
    }

    const destino = await this.locationService.findByCoordinates(
      destinoCoords.lat,
      destinoCoords.lng,
    );

    if (destino) {
      requst.id_destino = destino.id_ubicacion;
    } else {
      requst.id_destino = (
        await this.locationService.create({
          latitud: destinoCoords.lat,
          longitud: destinoCoords.lng,
          nombre: destinoB || 'Destino Desconocido',
          descripcion: destinoAddress || '',
          id_usuario: requst.id_usuario,
        })
      ).id_ubicacion;
    }

    return this.routesService.create({ ...requst, id_usuario: requst.id_usuario });
  }

  @Get()
  findAll() {
    return this.routesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.routesService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateRouteDto: any, @Req() request: Request) {
     const {
      origenCoords,
      destinoCoords,
      origen: origenB,
      destino: destinoB,
      origenAddress,
      destinoAddress,
      ...requst
    } = updateRouteDto;

    const user = request?.['user'];
    if(user) requst.id_usuario = parseInt(user.id) || 1;

    const origen = await this.locationService.findByCoordinates(
      origenCoords.lat,
      origenCoords.lng,
    );

    if (origen) {
      requst.id_origen = origen.id_ubicacion;
    } else {
      requst.id_origen = (
        await this.locationService.create({
          latitud: origenCoords.lat,
          longitud: origenCoords.lng,
          nombre: origenB || 'Origen Desconocido',
          descripcion: origenAddress || '',
          id_usuario: requst.id_usuario,
        })
      ).id_ubicacion;
    }

    const destino = await this.locationService.findByCoordinates(
      destinoCoords.lat,
      destinoCoords.lng,
    );

    if (destino) {
      requst.id_destino = destino.id_ubicacion;
    } else {
      requst.id_destino = (
        await this.locationService.create({
          latitud: destinoCoords.lat,
          longitud: destinoCoords.lng,
          nombre: destinoB || 'Destino Desconocido',
          descripcion: destinoAddress || '',
          id_usuario: requst.id_usuario,
        })
      ).id_ubicacion;
    }

    return this.routesService.update(+id, requst);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}
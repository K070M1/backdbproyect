import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { RoutesService } from './routes.service';
import { CreateRouteDto } from './dto/create-route.dto';
import { LocationService } from '../location/location.service';
import { UpdateRouteDto } from './dto/update-route.dto';

@Controller('routes')
export class RoutesController {
  constructor(
    private readonly routesService: RoutesService,
    private readonly locationService: LocationService,
  ) {}

  @Post()
  async create(@Body() createRouteDto: any) {
    const {
      origenCoords,
      destinoCoords,
      origen: origenB,
      destino: destinoB,
      id_usuario,
      ...request
    } = createRouteDto;

    const origen = await this.locationService.findByCoordinates(
      origenCoords.lat,
      origenCoords.lng,
    );

    if (origen) {
      request.id_origen = origen.id_ubicacion;
    } else {
      request.id_origen = (
        await this.locationService.create({
          latitud: origenCoords.lat,
          longitud: origenCoords.lng,
          nombre: origenB || 'Origen Desconocido',
          id_usuario,
        })
      ).id_ubicacion;
    }

    const destino = await this.locationService.findByCoordinates(
      destinoCoords.lat,
      destinoCoords.lng,
    );

    if (destino) {
      request.id_destino = destino.id_ubicacion;
    } else {
      request.id_destino = (
        await this.locationService.create({
          latitud: destinoCoords.lat,
          longitud: destinoCoords.lng,
          nombre: destinoB || 'Destino Desconocido',
          id_usuario,
        })
      ).id_ubicacion;
    }

    return this.routesService.create({ ...request, id_usuario });
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
  update(@Param('id') id: string, @Body() updateRouteDto: UpdateRouteDto) {
    return this.routesService.update(+id, updateRouteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.routesService.remove(+id);
  }
}

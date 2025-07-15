import { Injectable } from '@nestjs/common';
import { CreateZoneDto } from './dto/create-zone.dto';
import { UpdateZoneDto } from './dto/update-zone.dto';
import { PrismaService } from '@db/prisma.service';

@Injectable()
export class ZonesService {
  constructor(private prisma: PrismaService) { }

  async create(createZoneDto: any) {
    const { nombre, descripcion, shapeData, id_usuario, tipoPoligono, inseguro = false } = createZoneDto;

    if (!shapeData) {
      throw new Error('Necesitas proporcionar datos de forma para crear una zona segura.');
    }

    let areaSQL: string;

    if (tipoPoligono === 'circle' && shapeData.center && shapeData.radius) {
      const { lat, lng } = shapeData.center;
      const radius = shapeData.radius;
      areaSQL = `ST_Buffer(ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography, ${radius})`;
    } else if (tipoPoligono === 'rectangle' && shapeData.bounds) {
      const { north, south, east, west } = shapeData.bounds;
      const wkt = `POLYGON((
      ${west} ${north},
      ${east} ${north},
      ${east} ${south},
      ${west} ${south},
      ${west} ${north}
    ))`;
      areaSQL = `ST_GeogFromText('${wkt}')`;
    } else if (tipoPoligono === 'polygon' && shapeData.coordinates && shapeData.coordinates.length > 2) {
      const coords = shapeData.coordinates.map((c: any) => `${c.lng} ${c.lat}`).join(', ');
      const first = shapeData.coordinates[0];
      const last = shapeData.coordinates[shapeData.coordinates.length - 1];
      const closed = (first.lat !== last.lat || first.lng !== last.lng);
      const coordsWKT = closed ? `${coords}, ${first.lng} ${first.lat}` : coords;
      const wkt = `POLYGON((${coordsWKT}))`;
      areaSQL = `ST_GeogFromText('${wkt}')`;
    } else {
      throw new Error('Invalid shapeData for zone');
    }

    // Construye el query embebiendo solo el areaSQL
    const query = `
      INSERT INTO zonas_seguras (nombre, descripcion, area, id_usuario, forma, inseguro)
      VALUES ($1, $2, ${areaSQL}, $3, $4, $5)
      RETURNING id_zona, nombre, descripcion, ST_AsGeoJSON(area) AS area, id_usuario, forma, inseguro;
    `;

    const result = await this.prisma.$queryRawUnsafe(
      query,
      nombre,
      descripcion,
      id_usuario,
      tipoPoligono,
      inseguro
    );

    return result[0];
  }

  async findAll() {
    const zonas = await this.prisma.$queryRawUnsafe(`
      SELECT 
        id_zona,
        nombre,
        descripcion,
        forma,
        id_usuario,
        ST_AsGeoJSON(area) AS geojson,
        ST_Area(area) AS area_m2,
        ST_Perimeter(area::geometry) AS perimeter_m,
        inseguro,
        created_at,
        updated_at
      FROM zonas_seguras
    `);
    return zonas;
  }

  findOne(id: number) {
    return this.prisma.$queryRawUnsafe(`
      SELECT
        id_zona,
        nombre,
        descripcion,
        forma,
        ST_AsGeoJSON(area) AS geojson,
        ST_Area(area) AS area_m2,
        ST_Perimeter(area::geometry) AS perimeter_m,
        inseguro,
        created_at,
        updated_at
      FROM zonas_seguras
      WHERE id_zona = $1
    `, id);
  }

  async update(id: number, updateZoneDto: any) {
    const { nombre, descripcion, shapeData, tipoPoligono, inseguro = false } = updateZoneDto;

    // Si no hay nuevos datos de forma, solo actualizar nombre y descripción
    if (!shapeData || !tipoPoligono) {
      const updateQuery = `
        UPDATE zonas_seguras 
        SET nombre = $1, descripcion = $2, inseguro = $3, updated_at = NOW()
        WHERE id_zona = $4
        RETURNING *;
      `;
      
      const result = await this.prisma.$queryRawUnsafe(
        updateQuery,
        nombre,
        descripcion,
        inseguro,
        id
      );
      
      return result[0];
    }

    // Si hay nuevos datos de forma, actualizar con geometría
    let areaSQL: string;

    if (tipoPoligono === 'circle' && shapeData.center && shapeData.radius) {
      const { lat, lng } = shapeData.center;
      const radius = shapeData.radius;
      areaSQL = `ST_Buffer(ST_SetSRID(ST_MakePoint(${lng}, ${lat}), 4326)::geography, ${radius})`;
    } else if (tipoPoligono === 'rectangle' && shapeData.bounds) {
      const { north, south, east, west } = shapeData.bounds;
      const wkt = `POLYGON((
        ${west} ${north},
        ${east} ${north},
        ${east} ${south},
        ${west} ${south},
        ${west} ${north}
      ))`;
      areaSQL = `ST_GeogFromText('${wkt}')`;
    } else if (tipoPoligono === 'polygon' && shapeData.coordinates && shapeData.coordinates.length > 2) {
      const coords = shapeData.coordinates.map((c: any) => `${c.lng} ${c.lat}`).join(', ');
      const first = shapeData.coordinates[0];
      const last = shapeData.coordinates[shapeData.coordinates.length - 1];
      const closed = (first.lat !== last.lat || first.lng !== last.lng);
      const coordsWKT = closed ? `${coords}, ${first.lng} ${first.lat}` : coords;
      const wkt = `POLYGON((${coordsWKT}))`;
      areaSQL = `ST_GeogFromText('${wkt}')`;
    } else {
      throw new Error('Invalid shapeData for zone update');
    }

    // Construir el query de actualización
    const query = `
      UPDATE zonas_seguras 
      SET nombre = $1, descripcion = $2, area = ${areaSQL}, forma = $3, inseguro = $4, updated_at = NOW()
      WHERE id_zona = $5
      RETURNING id_zona, nombre, descripcion, ST_AsGeoJSON(area) AS area, forma, inseguro;
    `;

    const result = await this.prisma.$queryRawUnsafe(
      query,
      nombre,
      descripcion,
      tipoPoligono,
      inseguro,
      id
    );

    return result[0];
  }

  remove(id: number) {
    return this.prisma.zonas_seguras.delete({
      where: { id_zona: id },
    });
  }
}

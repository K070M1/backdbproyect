import {
  IsNumber,
  IsInt,
  IsOptional,
  IsString,
  MaxLength,
  IsEnum,
  Min,
  Max,
} from 'class-validator';

export enum Riesgo {
  Bajo = 'Bajo',
  Medio = 'Medio',
  Alto = 'Alto',
}

export class CreateLocationDto {
  @IsNumber()
  @Min(-90)
  @Max(90)
  latitud: number;

  @IsNumber()
  @Min(-180)
  @Max(180)
  longitud: number;

  @IsInt()
  id_usuario: number;

  @IsOptional()
  @IsString()
  @MaxLength(100)
  nombre?: string;

  @IsOptional()
  @IsString()
  descripcion?: string;

  @IsOptional()
  @IsEnum(Riesgo)
  riesgo?: Riesgo;
}

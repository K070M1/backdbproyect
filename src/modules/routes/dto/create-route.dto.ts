import {
  IsBoolean,
  IsInt,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateRouteDto {
  @IsInt()
  @IsPositive()
  id_usuario: number;

  @IsInt()
  @IsPositive()
  id_origen: number;

  @IsInt()
  @IsPositive()
  id_destino: number;

  @IsInt()
  @IsOptional()
  riesgo?: number;

  @IsString()
  @MaxLength(255)
  @IsOptional()
  tiempo_estimado?: string;

  @IsBoolean()
  @IsOptional()
  favorito?: boolean;
}

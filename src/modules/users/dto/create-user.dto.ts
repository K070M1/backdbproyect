import {
  IsString,
  IsEmail,
  MinLength,
  MaxLength,
  IsOptional,
  IsIn,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(100)
  nombre_usuario: string;

  @IsEmail()
  correo: string;

  @IsString()
  @MinLength(6)
  clave: string;

  @IsOptional()
  @IsIn(['admin', 'moderador', 'usuario'])
  rol?: string = 'usuario';
}

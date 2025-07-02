export class Route {
  id_ruta: number;
  id_usuario: number;
  id_origen: number;
  id_destino: number;
  riesgo: number;
  tiempo_estimado: string;
  favorito: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

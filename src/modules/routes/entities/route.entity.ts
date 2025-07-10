export interface Route {
  id_ruta: number;
  id_usuario: number | null;
  riesgo: number;
  tiempo_estimado: string;
  id_origen: number | null;
  id_destino: number | null;
  favorito: boolean;
  created_at: Date;
  updated_at: Date | null;
  origen: string;
  origen_direccion: string | null;
  destino: string;
  destino_direccion: string | null;
}
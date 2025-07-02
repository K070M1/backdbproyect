-- CreateTable
CREATE TABLE "calificacion" (
    "id_calificacion" SERIAL NOT NULL,
    "id_usuario" INTEGER,
    "calificacion" INTEGER,
    "comentario" TEXT,
    "id_evento" INTEGER,
    "id_zona_segura" INTEGER,
    "tipo_calificacion" VARCHAR(50),

    CONSTRAINT "calificacion_pkey" PRIMARY KEY ("id_calificacion")
);

-- CreateTable
CREATE TABLE "detalle_ruta" (
    "id_detalle_ruta" SERIAL NOT NULL,
    "id_ruta" INTEGER,
    "id_zona_segura" INTEGER,
    "id_evento" INTEGER,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "detalle_ruta_pkey" PRIMARY KEY ("id_detalle_ruta")
);

-- CreateTable
CREATE TABLE "rutas" (
    "id_ruta" SERIAL NOT NULL,
    "id_usuario" INTEGER,
    "riesgo" INTEGER,
    "tiempo_estimado" interval,
    "id_origen" INTEGER,
    "id_destino" INTEGER,
    "favorito" BOOLEAN DEFAULT false,

    CONSTRAINT "rutas_pkey" PRIMARY KEY ("id_ruta")
);

-- CreateTable
CREATE TABLE "tipo_evento" (
    "id_tipo_evento" SERIAL NOT NULL,
    "nombre" VARCHAR(100) NOT NULL,

    CONSTRAINT "tipo_evento_pkey" PRIMARY KEY ("id_tipo_evento")
);

-- CreateTable
CREATE TABLE "ubicacion" (
    "id_ubicacion" SERIAL NOT NULL,
    "id_usuario" INTEGER,
    "latitud" DECIMAL(9,6) NOT NULL,
    "longitud" DECIMAL(9,6) NOT NULL,
    "nombre" VARCHAR(100),

    CONSTRAINT "ubicacion_pkey" PRIMARY KEY ("id_ubicacion")
);

-- CreateTable
CREATE TABLE "usuarios" (
    "id_usuario" SERIAL NOT NULL,
    "nombre_usuario" VARCHAR(100) NOT NULL,
    "clave" TEXT NOT NULL,
    "rol" VARCHAR(20),
    "correo" VARCHAR(100) NOT NULL,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id_usuario")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_correo_key" ON "usuarios"("correo");

-- AddForeignKey
ALTER TABLE "calificacion" ADD CONSTRAINT "calificacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "detalle_ruta" ADD CONSTRAINT "detalle_ruta_id_ruta_fkey" FOREIGN KEY ("id_ruta") REFERENCES "rutas"("id_ruta") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rutas" ADD CONSTRAINT "rutas_id_destino_fkey" FOREIGN KEY ("id_destino") REFERENCES "ubicacion"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rutas" ADD CONSTRAINT "rutas_id_origen_fkey" FOREIGN KEY ("id_origen") REFERENCES "ubicacion"("id_ubicacion") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "rutas" ADD CONSTRAINT "rutas_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "ubicacion" ADD CONSTRAINT "ubicacion_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

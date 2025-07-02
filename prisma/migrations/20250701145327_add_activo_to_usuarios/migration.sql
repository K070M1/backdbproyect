/*
  Warnings:

  - You are about to alter the column `tiempo_estimado` on the `rutas` table. The data in that column could be lost. The data in that column will be cast from `Unsupported("interval")` to `VarChar`.

*/
-- AlterTable
ALTER TABLE "rutas" ALTER COLUMN "tiempo_estimado" SET DATA TYPE VARCHAR;

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN     "activo" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "usuarios" ADD COLUMN "avatar_url" VARCHAR(255);

-- CreateTable
CREATE TABLE "eventos" (
    "id_evento" SERIAL NOT NULL,
    "id_tipo_evento" INTEGER,
    "descripcion" TEXT,
    "id_usuario" INTEGER,
    "fecha_registro" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "ubicacion" geography,

    CONSTRAINT "evento_pkey" PRIMARY KEY ("id_evento")
);

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "evento_id_tipo_evento_fkey" FOREIGN KEY ("id_tipo_evento") REFERENCES "tipo_evento"("id_tipo_evento") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "eventos" ADD CONSTRAINT "evento_id_usuario_fkey" FOREIGN KEY ("id_usuario") REFERENCES "usuarios"("id_usuario") ON DELETE NO ACTION ON UPDATE NO ACTION;

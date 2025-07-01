import { config } from 'dotenv';
import { resolve } from 'path';

config({ path: resolve(__dirname, '../.env.docker') });

import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('✅ DATABASE_URL:', process.env.DATABASE_URL);

  const hashedPassword1 = await bcrypt.hash('admin123', 10);
  const hashedPassword2 = await bcrypt.hash('user123', 10);

  await prisma.usuarios.createMany({
    data: [
      {
        nombre_usuario: 'Admin User',
        clave: hashedPassword1,
        rol: 'admin',
        correo: 'admin@demo.com',
        avatar_url: '/uploads/avatars/admin.jpg', // opcional
      },
      {
        nombre_usuario: 'Usuario Demo',
        clave: hashedPassword2,
        rol: 'usuario',
        correo: 'usuario@demo.com',
        avatar_url: '/uploads/avatars/usuario.jpg', // opcional
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Usuarios de prueba insertados');
}

main()
  .catch((error) => {
    console.error('❌ Error al ejecutar seed:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

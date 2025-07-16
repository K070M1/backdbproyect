<p align="center">
  <a href="http://nestjs.com/" target="_blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="200" alt="NestJS Logo" />
  </a>
</p>

[![CircleCI](https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456)](https://circleci.com/gh/nestjs/nest)

---

# BackDBProyect

Proyecto backend con NestJS y Prisma, preparado para trabajar con bases de datos locales o Supabase.

## 🚀 Instalación rápida

```bash
# Clona el repositorio
git clone https://github.com/K070M1/backdbproyect.git

# Entra al directorio
cd backdbproyect

# Actualiza la rama principal
git pull origin main

# Instala dependencias
npm install

# Crea tu .env y configura variables
echo DATABASE_URL="postgresql://usuario:clave@localhost:5432/baseDatos?schema=public" >> .env
echo TOKEN_SECRET="TU_TOKEN_AQUI" >> .env

# Inicia el proyecto (Puerto 5000)
npm run start:dev

# Opcional: Instala Nest CLI y genera un recurso
npm i -g @nestjs/cli
nest g res modules/{nombre}
```

---

## ⚡ Configura Supabase

> **Importante:**  
> Elimina `node_modules` y `package-lock.json`, luego ejecuta `npm install` para instalar dependencias limpias.

1. **DATABASE_URL en `.env`**

   Crea o edita tu archivo `.env`:

   ```env
   DATABASE_URL="TU_URL_SUPABASE_AQUI"
   ```

2. **Configura `prisma/schema.prisma`**

   Asegúrate de que contenga solo esto:

   ```prisma
   generator client {
     provider = "prisma-client-js"
   }

   datasource db {
     provider = "postgresql"
     url      = env("DATABASE_URL")
   }
   ```

3. **Sincroniza esquema de base de datos**

   ```bash
   npx prisma db pull
   ```

4. **Genera el cliente Prisma**

   ```bash
   npx prisma generate
   ```

---

✅ ¡Listo! Tu proyecto está preparado para conectarse a Supabase con Prisma.

---

## 📤 Subir cambios al repositorio

```bash
# Configura tu cuenta local de git
git config --global user.name "Tu usuario"
git config --global user.email "Tu email"

# Crea una nueva rama
git checkout -b TuNombre

# Agrega cambios
git add .

# Haz commit
git commit -m "Descripción del commit"

# Sube tus cambios
git push origin TuNombre
```

---

## 💡 Tips adicionales

- Si tienes problemas con dependencias, ejecuta `npm ci` para una instalación limpia.
- Usa ramas descriptivas para nuevas funcionalidades o correcciones.
- Haz siempre pull antes de agregar nuevos cambios.

---

## 📚 Recursos

- [NestJS Documentación](https://docs.nestjs.com/)
- [Prisma](https://www.prisma.io/docs/)
- [Supabase](https://supabase.com/docs)

## 👥 Contribuidores

<a href="https://github.com/K070M1">
  <img src="https://avatars.githubusercontent.com/u/100973511?v=4" width="50" alt="K070M1" />
</a>
<a href="https://github.com/absanr">
  <img src="https://avatars.githubusercontent.com/u/88864000?v=4" width="50" alt="absanr (Roger)" />
</a>
<a href="https://github.com/carlosmerc-dev">
  <img src="https://avatars.githubusercontent.com/u/207932039?v=4" width="50" alt="carlosmerc-dev (Carlos)" />
</a>

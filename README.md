<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Instalación

```bash
# Primer paso (Primario)
$ git clone https://github.com/K070M1/backdbproyect.git

# Segundo paso 
$ git pull origin main

# Tercer paso
$ npm install - npm i

# Cuarto paso - Crear .env
$ DATABASE_URL="postgresql://usuario:clave@localhost:5432/baseDatos?schema=public"
$ TOKEN_SECRET="dbProyectConnection"

# Quinto paso (Corres el proyecto: Puerto 5000)
$ npm run start:dev

# Adicional*
$ npm i -g @nestjs/cli
$ nest g res modules/{nombre}
```

## Configuración del entorno para usar `SUPABASE`

> **Importante:** Antes de empezar, elimina `node_modules` y `package-lock.json`, luego ejecuta `npm install` para instalar dependencias limpias.

### 1. Configura tu DATABASE_URL en `.env`

Abre (o crea) tu archivo `.env` y coloca tu string de conexión:

```env
DATABASE_URL="postgres://prisma.sxjlyiclvgdgfetdgabz:TGqxUEa5pk9hTvaY@aws-0-us-east-2.pooler.supabase.com:5432/postgres"
```

### 2. Asegúrate de que tu archivo `prisma/schema.prisma` tenga solo lo siguiente:

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

### 3. Sincroniza el esquema de la base de datos

```bash
npx prisma db pull
```

### 4. Genera el cliente Prisma

```bash
npx prisma generate
```

---

**Listo. Ahora tu proyecto está listo para conectarse a la base de datos de Supabase usando Prisma.**

## Subir cambios al repositorio

```bash

# Cambiar configuración de cuenta local de git
$ git config --global user.name = "Tu usuario"
$ git config --global user.email = "Tu email"


# Primer paso - Crear Rama
$ git checkout -B "TuNombre"

# Segundo paso
$ git add .

# Tercer paso
$ git commit -m "Nombre commit"

# Cuarto paso
$ git push origin "TuNombre"
```


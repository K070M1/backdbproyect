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
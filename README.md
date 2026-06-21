<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. Tener Nest CLI instalado
   ```
   npm i -g @nestjs/cli
   ```
2. Clonar el repositorio
3. Instalar las dependencias
   ```
   npm install
   ```
4. Levantar la base de datos

   ```
   docker-compose up -d
   ```

5. Clonar el archivo **.env.template** y renombrar la copia a **.env**

6. LLenar las variables de entorno definidas en el **.env**

7. Ejecutar la aplicacion en forma local en dev:

   ```
   npm run start:dev
   ```

8. Reconstruir la base de datos con el seed
   ```
   http://localhost:3000/api/v2/seed
   ```

# Production build

1. Crear el archivo `.env.prod`
2. LLenar las variables del entorno de produccion
3. Crear la nueva imagen
   ```
   docker-compose -f docker-compose.prod.yaml --env-file .env.prod up --build
   ```

# Ejecutar en produccion

```
docker-compose -f docker-compose.prod.yaml --env-file .env.prod up -d
```

## Stack usado

- Nestjs
- MongoDB

## Dockerfile examples

- [Dicker file example](https://gist.github.com/Klerith/e7861738c93712840ab3a38674843490)

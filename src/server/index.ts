// Importamos los módulos y las bibliotecas necesarios.
import fastifyCors from "@fastify/cors";
import * as dotenv from "dotenv";
dotenv.config(); // Cargamos variables de entorno desde un archivo .env.

import fastify from "fastify";
// Importamos la función para inicializar las fuentes de datos.
// Importamos la función para registrar las rutas.
import { initDataSources } from "../data-sources";
import { registerRoutes } from "../routes";

// Definimos el puerto y el host en el que se ejecutará el servidor.
const PORT = (process.env.PORT || 4200) as number;
const HOST = "0.0.0.0";

// Función asincrónica autoinvocada.
(async () => {
  // Inicializamos las fuentes de datos, en este caso, la conexión a MongoDB.
  await initDataSources({
    mongoose: {
      mongoUrl: process.env.MONGODB_URL as string,
    },
  });

  // Creamos una instancia de Fastify.
  const server = fastify({
    logger: true, // Habilitamos el registro de registros.
  });

  // Registramos las rutas en la instancia de Fastify.
  server.register(
    (instance, options, next) => {
      registerRoutes(instance);
      next();
    },
    { prefix: "api/v1" } // Establecemos un prefijo para las rutas.
  );

  // Registramos el middleware CORS para permitir solicitudes desde diferentes orígenes.
  server.register(fastifyCors, {
    origin: true,
  });

  // Iniciamos el servidor en el puerto y host especificados.
  const serverAddress = await server.listen({ port: PORT, host: HOST }, () => {
    server.log.info(`Backend App is running at http://localhost:${PORT}`);
    server.log.info("Press CTRL-c to stop");
  });
})();

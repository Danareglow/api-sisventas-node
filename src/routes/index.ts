// Importamos las bibliotecas y módulos necesarios de Fastify y rutas relacionadas.
import { FastifyInstance, RouteOptions } from "fastify";

// Combinamos todas las rutas en un arreglo.
const routes: RouteOptions[] = [];

// Definimos una función para registrar las rutas en una instancia de Fastify.
export const registerRoutes = (fastify: FastifyInstance) => {
  // Emitimos un mensaje de advertencia en los registros de Fastify.
  fastify.log.warn("Registering routes", routes);

  // Iteramos sobre las rutas y las registramos en la instancia de Fastify.
  routes.map((route) => {
    fastify.route(route);
  });
};

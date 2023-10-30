import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { eliminarCategoria } from "../../servicios";

interface Parametros {
  uuid: string;
}

export const EliminarCategoriaRuta: RouteOptions = {
  method: MetodosPeticion.DELETE,
  url: "/categorias/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Parametros;
    try {
      const resultadoEliminacion = await eliminarCategoria(uuid);
      reply.status(200).send(resultadoEliminacion);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

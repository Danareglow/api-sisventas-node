import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { eliminarUsuario } from "../../servicios";

interface Parametros {
  uuid: string;
}

export const EliminarUsuarioRuta: RouteOptions = {
  method: MetodosPeticion.DELETE,
  url: "/usuarios/:uuid",
  handler: async (request, reply) => {
    const { params } = request;
    const { uuid } = params as Parametros;
    try {
      const resultadoEliminacion = await eliminarUsuario(uuid);
      reply.status(200).send(resultadoEliminacion);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

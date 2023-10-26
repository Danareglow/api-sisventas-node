import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ListarUsuarios } from "../../servicios";

export const ListarUsuariosRutas: RouteOptions = {
  method: MetodosPeticion.GET,
  url: "/usuarios",
  handler: async (request, reply) => {
    try {
      const listaDeUsuarios = await ListarUsuarios();
      reply.status(200).send(listaDeUsuarios);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

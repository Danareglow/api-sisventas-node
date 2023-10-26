import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { UsuarioPartial } from "../../entidades";
import { actualizarUsuario } from "../../servicios";

export const ActualizarUsuarioRuta: RouteOptions = {
  method: MetodosPeticion.PUT,
  url: "/usuarios",
  handler: async (request, reply) => {
    const data = request.body as UsuarioPartial;
    try {
      const usuarioActualizado = await actualizarUsuario(data);
      reply.status(200).send(usuarioActualizado);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

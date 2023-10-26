import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { OmitirUuidUsuario } from "../../entidades";
import { RegistrarUsuario } from "../../servicios/usuarios/registrar";

export const CrearUsuarioRuta: RouteOptions = {
  method: MetodosPeticion.POST,
  url: "/usuarios",
  handler: async (request, reply) => {
    const data = request.body as OmitirUuidUsuario;
    try {
      const usuario = await RegistrarUsuario(data);
      reply.status(200).send(usuario);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

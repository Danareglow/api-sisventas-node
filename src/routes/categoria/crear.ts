import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { OmitirUuidCategoria } from "../../entidades";
import { crearCategoria } from "../../servicios";

export const CrearCategoriaRuta: RouteOptions = {
  method: MetodosPeticion.POST,
  url: "/categorias",
  handler: async (request, reply) => {
    const data = request.body as OmitirUuidCategoria;
    try {
      const categoria = await crearCategoria(data);
      reply.status(200).send(categoria);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

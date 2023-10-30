import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { CategoriaPartial } from "../../entidades";
import { actualizarCategoria } from "../../servicios";

export const ActualizarCategoriaRuta: RouteOptions = {
  method: MetodosPeticion.PUT,
  url: "/categorias",
  handler: async (request, reply) => {
    const data = request.body as CategoriaPartial;
    try {
      const categoriaActualizada = await actualizarCategoria(data);
      reply.status(200).send(categoriaActualizada);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
},
};

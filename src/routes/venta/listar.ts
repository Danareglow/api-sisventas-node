import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ListarVentas } from "../../servicios";

export const ListarVentaRuta: RouteOptions = {
  method: MetodosPeticion.GET,
  url: "/ventas",
  handler: async (request, reply) => {
    try {
      const listaDeVentas = await ListarVentas();
      reply.status(200).send(listaDeVentas);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

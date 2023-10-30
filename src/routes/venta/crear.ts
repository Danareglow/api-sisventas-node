import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { CrearVentaDTO } from "../../entidades";
import { crearVenta } from "../../servicios";

export const CrearVentaRuta: RouteOptions = {
  method: MetodosPeticion.POST,
  url: "/ventas",
  handler: async (request, reply) => {
    const data = request.body as CrearVentaDTO;
    try {
      const venta = await crearVenta(data);
      reply.status(200).send(venta);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ActualizarVentaDTO } from "../../entidades";
import { actualizarVenta } from "../../servicios";

export const ActualizarVentaRuta: RouteOptions = {
  method: MetodosPeticion.PUT,
  url: "/ventas",
  handler: async (request, reply) => {
    const data = request.body as ActualizarVentaDTO;
    try {
      const ventaActualizada = await actualizarVenta(data);
      reply.status(200).send(ventaActualizada);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

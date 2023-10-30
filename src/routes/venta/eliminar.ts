import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { eliminarVenta } from "../../servicios";

interface Parametros {
  numero_factura: number;
}
export const EliminarVentaRuta: RouteOptions = {
  method: MetodosPeticion.DELETE,
  url: "/venta/:numero_factura",
  handler: async (request, reply) => {
    const { params } = request;
    const { numero_factura } = params as Parametros;
    try {
      const resultadoEliminacion = await eliminarVenta(numero_factura);
      reply.status(200).send(resultadoEliminacion);
    } catch (err) {
      console.log(err);
      reply.status(500).send(err);
    }
  },
};

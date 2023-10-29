import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { eliminarProducto } from "../../servicios";

interface Parametros {
    uuid: string;
}

export const EliminarProductoRuta: RouteOptions = {
    method: MetodosPeticion.DELETE,
    url: "/productos/:uuid",
    handler: async (request, reply) => {
        const { params } = request;
        const { uuid } = params as Parametros;
        try{
            const resultadoEliminacion = await eliminarProducto(uuid);
            reply.status(200).send(resultadoEliminacion);
        } catch (err) {
            console.log(err);
            reply.status(500).send(err);
        }
    },
};
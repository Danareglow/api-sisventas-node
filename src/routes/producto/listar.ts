import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ListarProductos } from "../../servicios";

export const ListarProductosRuta: RouteOptions = {
    method: MetodosPeticion.GET,
    url: "/productos",
    handler: async (request, reply) => {
        try{
            const listaDeProductos = await ListarProductos();
            reply.status(200).send(listaDeProductos);
        } catch (err) {
            console.log(err);
            reply.status(500).send(err);
        }
    },
};
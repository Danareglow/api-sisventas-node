import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ProductoPartial } from "../../entidades";
import { actualizarProducto } from "../../servicios";

export const ActualizarProductoRuta: RouteOptions = {
    method: MetodosPeticion.PUT,
    url: "/productos",
    handler: async (request, reply) => {
        const data = request.body as ProductoPartial;
        try{
            const productoActualizado = await actualizarProducto(data);
            reply.status(200).send(productoActualizado);
        } catch (err) {
            console.log(err);
            reply.status(500).send(err);
        }
    },
};
import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { OmitirUuidProducto } from "../../entidades";
import { crearProducto } from "../../servicios";

export const CrearProductoRuta: RouteOptions = {
    method: MetodosPeticion.POST,
    url: "/productos",
    handler: async (request, reply) => {
        const data = request.body as OmitirUuidProducto;
        try{
            const usuario = await crearProducto(data);
            reply.status(200).send(usuario);
        } catch (err) {
            console.log(err);
            reply.status(500).send(err);
        }
    },
};
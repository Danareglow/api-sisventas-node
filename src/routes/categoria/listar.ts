import { RouteOptions } from "fastify";
import { MetodosPeticion } from "../../constants-definitions";
import { ListarCategorias } from "../../servicios";

export const ListarCategoriasRutas: RouteOptions={
    method: MetodosPeticion.GET,
    url:"/categorias",
    handler: async(request, reply)=>{
        try{
            const listaDeCategorias = await ListarCategorias();
            reply.status(200).send(listaDeCategorias);
        }catch (err){
            console.log(err);
            reply.status(500).send(err);
        }
    },
};
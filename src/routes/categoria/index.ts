import { RouteOptions } from "fastify";
import { CrearCategoriaRuta } from "./crear";
import { ActualizarCategoriaRuta } from "./actualizar";
import { EliminarCategoriaRuta } from "./eliminar";
import { ListarCategoriasRutas } from "./listar";
export const RutasProducto: RouteOptions[] = [
    CrearCategoriaRuta,
    ActualizarCategoriaRuta,
    EliminarCategoriaRuta,
    ListarCategoriasRutas,
];
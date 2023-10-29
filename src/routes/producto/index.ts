import { RouteOptions } from "fastify";
import { CrearProductoRuta } from "./crear";
import { ListarProductosRuta } from "./listar";
import { ActualizarProductoRuta } from "./actualizar";
import { EliminarProductoRuta } from "./eliminar";

export const RutasProducto: RouteOptions[] = [
    CrearProductoRuta,
    ListarProductosRuta,
    ActualizarProductoRuta,
    EliminarProductoRuta
];
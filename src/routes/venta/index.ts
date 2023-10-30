import { RouteOptions } from "fastify";
import { CrearVentaRuta } from "./crear";
import { ActualizarVentaRuta } from "./actualizar";
import { EliminarVentaRuta } from "./eliminar";
import { ListarVentaRuta } from "./listar";

export const RutasVenta: RouteOptions[] = [
  CrearVentaRuta,
  ActualizarVentaRuta,
  EliminarVentaRuta,
  ListarVentaRuta,
];

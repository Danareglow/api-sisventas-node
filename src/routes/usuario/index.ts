import { RouteOptions } from "fastify";
import { CrearUsuarioRuta } from "./crear";
import { EliminarUsuarioRuta } from "./eliminar";
import { ActualizarUsuarioRuta } from "./actualizar";
import { ListarUsuariosRutas } from "./listar";

export const RutasUsuario: RouteOptions[] = [
  CrearUsuarioRuta,
  EliminarUsuarioRuta,
  ActualizarUsuarioRuta,
  ListarUsuariosRutas,
];

export interface Usuario {
  uuid: string;
  nombre: string;
  apellido: string;
  foto: string;
  correo: string;
  password: string;
}

export type OmitirUuidUsuario = Omit<Usuario, "uuid">;
export type UsuarioPartial = Partial<Usuario>;

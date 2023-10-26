import { Collection, getModel } from "../../constants-definitions";
import { EsquemaUsuarioMongo, Usuario } from "../../entidades";
import bcrypt from 'bcrypt';

interface LoginData {
  correo: string;
  password: string;
}

export const Login = async (data: LoginData): Promise<Usuario | Error> => {
  const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
  const usuario = await modelo.findOne({ correo: data.correo });
  if (!usuario) {
    return new Error("El usuario no existe");
  }
  const validacionContraseña = await bcrypt.compare(data.password, usuario.password);
  if (!validacionContraseña) {
    return new Error("LA CONTRASEÑA ES INCORRECTA");
  }
  return { ...usuario._doc };
};

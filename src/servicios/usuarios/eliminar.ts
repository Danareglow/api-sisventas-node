import { Collection, getModel } from "../../constants-definitions";
import { EsquemaUsuarioMongo } from "../../entidades";

export const eliminarUsuario = async (uuid: string): Promise<Boolean | Error> => {
  const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
  const usuario = await modelo.findById(uuid);
  if (!usuario) {
    throw new Error("602");
  }
  await usuario.deleteOne();
  return true;
};

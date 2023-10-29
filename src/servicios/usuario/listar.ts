import { Collection, getModel } from "../../constants-definitions";
import { EsquemaUsuarioMongo, Usuario } from "../../entidades";

export const ListarUsuarios = async(): Promise<Usuario[] | Error> => {
    const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
    const usuarios = await modelo.find({}) as Usuario[];
    return usuarios;
}
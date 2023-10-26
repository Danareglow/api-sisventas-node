import { Collection, getModel } from "../../constants-definitions";
import { EsquemaUsuarioMongo, Usuario, UsuarioPartial } from "../../entidades";

export const actualizarUsuario = async (data: UsuarioPartial): Promise<Usuario | Error> => {
    const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
    const usuario = await modelo.findOne({uuid: data.uuid});
    if(!usuario){
        return new Error("El usuario no se encontro");
    }
    const UsuarioActualizado = { ... data};
    await usuario.updateOne(UsuarioActualizado);
    return {...usuario.doc};
};
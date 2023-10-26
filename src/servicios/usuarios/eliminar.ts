import { Collection, getModel } from "../../constants-definitions"
import { EsquemaUsuarioMongo } from "../../entidades"

export const eliminarUsuario = async(uuid: String): Promise<Boolean | Error> => {
    const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
    const usuario = await modelo.findOne({uuid: uuid});
    if(!usuario){
        return new Error("El usuario no se encontro");
    }
    await usuario.remove();
    return true;
};
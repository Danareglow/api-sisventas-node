import { Collection, getModel } from "../../constants-definitions";
import { EsquemaUsuarioMongo, OmitirUuidUsuario, Usuario } from "../../entidades";
import { v4 as uuidv4 } from "uuid";

export const crearUsuario = async (data: OmitirUuidUsuario):Promise<Usuario | Error> => {
    const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
    const usuario = await modelo.findOne({nombre: data.nombre});
    if(usuario){
        return new Error ("El usuario ya existe");
    }
    const uuid = uuidv4();
    const nuevo_usuario = new modelo({ ...data, uuid});
    await nuevo_usuario.save();
    return { ...nuevo_usuario._doc};
};
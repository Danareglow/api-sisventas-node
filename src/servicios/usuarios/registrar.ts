import { EsquemaUsuarioMongo, OmitirUuidUsuario, Usuario } from "../../entidades";
import { Collection, getModel } from "../../constants-definitions";
import bcrypt from "bcrypt"

export const RegistrarUsuario = async(datos:OmitirUuidUsuario):Promise<Usuario | Error> => {
    const modelo = await getModel(Collection.USUARIOS, EsquemaUsuarioMongo);
    const usuario = await modelo.findOne({ correo: datos.correo });
    if (usuario) {
        return new Error("El usuario ya existe");
    }
    const contraseñaEncriptada = await bcrypt.hashSync(datos.password || "", 10);
    const nuevoUsuario = new modelo({...datos, password: contraseñaEncriptada})
    await nuevoUsuario.save();
    return { ...nuevoUsuario._doc };

}
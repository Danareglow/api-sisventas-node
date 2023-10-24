import { Collection, getModel } from "../../constants-definitions";
import { EsquemaCategoriaMongo } from "../../entidades";

export const eliminarCategoria = async(uuid: String):Promise<Boolean | Error> => {
    const modelo = await getModel(Collection.CATEGORIAS, EsquemaCategoriaMongo);
    const categoria = await modelo.findOne({uuid: uuid});
    if(!categoria){
        return new Error("la categoria no se encontro")
    }
    await categoria.remove();
    return true;
}

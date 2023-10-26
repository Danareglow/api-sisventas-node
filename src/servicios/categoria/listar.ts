import { Collection, getModel } from "../../constants-definitions";
import { Categoria, EsquemaCategoriaMongo } from "../../entidades";

export const ListarCategorias = async ():Promise<Categoria[] | Error> => {
    const modelo = await getModel(Collection.CATEGORIAS, EsquemaCategoriaMongo);
    const categorias = await modelo.find({}) as Categoria[];
    return categorias;  
}
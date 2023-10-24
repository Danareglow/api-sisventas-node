import { Collection, getModel } from "../../constants-definitions";
import {
  Categoria,
  CategoriaPartial,
  EsquemaCategoriaMongo,
} from "../../entidades";

export const actualizarCategoria = async (data: CategoriaPartial): Promise<Categoria | Error> => {
  const modelo = await getModel(Collection.CATEGORIAS, EsquemaCategoriaMongo);
  const categoria = await modelo.findOne({ uuid: data.uuid });
  if (!categoria) {
    return new Error("la categoria no se encontro");
  }
  const CategoriaActualizada = { ...data };
  await categoria.updateOne(CategoriaActualizada);
  return {...categoria.doc};
};

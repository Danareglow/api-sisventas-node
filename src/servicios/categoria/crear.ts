import { Collection, getModel } from "../../constants-definitions";
import {
  Categoria,
  EsquemaCategoriaMongo,
  OmitirUuidCategoria,
} from "../../entidades";
import { v4 as uuidv4 } from "uuid";

export const crearCategoria = async (data: OmitirUuidCategoria): Promise<Categoria | Error> => {
  const modelo = await getModel(Collection.CATEGORIAS, EsquemaCategoriaMongo);
  const categoria = await modelo.findOne({ nombre: data.nombre });
  if (categoria) {
    return new Error("La categoria ya existe");
  }
  //aqui se crea el uuid
  const uuid = uuidv4();
  const nueva_categoria = new modelo({ ...data, uuid });
  await nueva_categoria.save();
  return { ...nueva_categoria._doc };
};

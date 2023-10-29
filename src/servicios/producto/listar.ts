import { Collection, getModel } from "../../constants-definitions";
import { EsquemaProductoMongo, Producto } from "../../entidades";

export const ListarProductos = async (): Promise<Producto[] | Error> => {
  const modelo = await getModel(Collection.PRODUCTOS, EsquemaProductoMongo);
  const productos = await modelo.find({}) as Producto[];
  return productos;
};
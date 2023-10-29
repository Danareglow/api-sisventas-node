import { Collection, getModel } from "../../constants-definitions";
import { EsquemaProductoMongo, Producto, ProductoPartial } from "../../entidades";

export const actualizarProducto = async (data: ProductoPartial): Promise<Producto | Error> => {
    const modelo = await getModel(Collection.PRODUCTOS, EsquemaProductoMongo);
    const producto = await modelo.findOne({uuid: data.uuid});
    if (!producto){
        return new Error("la categoria no se encontro");
    }
    const ProductoActualizado = {...data};
    await producto.updateOne(ProductoActualizado)
    return {...producto.doc};
};
import { Collection, getModel } from "../../constants-definitions";
import { EsquemaProductoMongo } from "../../entidades";

export const eliminarProducto = async(uuid: String): Promise<Boolean | Error> =>{
    const modelo = await getModel(Collection.PRODUCTOS, EsquemaProductoMongo);
    const producto = await modelo.findOne({uuid: uuid});
    if(!producto){
        return new Error("El producto no se encontro");
    }
    await producto.deleteOne();
    return true;
};
import { Collection, getModel } from "../../constants-definitions";
import { EsquemaProductoMongo, OmitirUuidProducto, Producto } from "../../entidades";
import { v4 as uuidv4 } from "uuid";

export const crearProducto = async (data: OmitirUuidProducto): Promise<Producto | Error> => {
const modelo = await getModel(Collection.PRODUCTOS, EsquemaProductoMongo);
const producto = await modelo.findOne({nombre: data.nombre});
if(producto) { 
    return new Error("El producto ya existe");
}
const uuid = uuidv4();
const nuevo_producto = new modelo ({ ...data, uuid});
await  nuevo_producto.save();
return { ...nuevo_producto._doc};
};
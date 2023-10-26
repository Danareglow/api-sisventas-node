import { Collection, getModel } from "../../constants-definitions";
import { EsquemaVentaMongo, Venta } from "../../entidades";

export const ListarVentas = async ():Promise<Venta[] | Error> => {
    const modelo = await getModel(Collection.VENTAS, EsquemaVentaMongo);
    const ventas = await modelo.find({}) as Venta[];
    return ventas;
}
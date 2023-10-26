import { Collection, getModel } from "../../constants-definitions";
import { EsquemaVentaMongo } from "../../entidades";

export const eliminarVenta = async (
  numero_factura: Number): Promise<Boolean | Error> => {
  const modelo = await getModel(Collection.VENTAS, EsquemaVentaMongo);
  const venta = await modelo.findOne({ numero_factura: numero_factura });
  if (!venta) {
    return new Error("la venta no se encontro");
  }
  await venta.remove();
  return true;
};

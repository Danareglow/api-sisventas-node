import { Collection, getModel } from "../../constants-definitions";
import { Venta, ActualizarVentaDTO, EsquemaVentaMongo } from "../../entidades";

export const actualizarVenta = async (data: ActualizarVentaDTO): Promise<Venta | Error> => {
  const modelo = await getModel(Collection.VENTAS, EsquemaVentaMongo);
  const venta = await modelo.findOne({ numero_factura: data.numero_factura });
  if (!venta) {
    return new Error("la venta no se encontro");
  }
  const VentaActualizada = { ...data };
  await venta.updateOne(VentaActualizada);
  return { ...venta.doc };
};

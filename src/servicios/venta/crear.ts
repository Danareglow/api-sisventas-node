import { Collection, getModel } from "../../constants-definitions";
import { CrearVentaDTO, EsquemaVentaMongo, Venta } from "../../entidades";
import { v4 as uuidv4 } from "uuid";

export const crearVenta = async (data: CrearVentaDTO): Promise<Venta | Error> => {
  const modelo = await getModel(Collection.VENTAS, EsquemaVentaMongo);
  const venta = await modelo.findOne({ numero_factura: data.numero_factura });
  if (venta) {
    return new Error("La venta ya existe");
  }
  const uuid = uuidv4();
  const nueva_venta = new modelo({ ...data, uuid });
  await nueva_venta.save();
  return { ...nueva_venta._doc };
};

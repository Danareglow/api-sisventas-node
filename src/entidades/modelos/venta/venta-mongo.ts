import { Schema } from "mongoose";
import { Venta } from "./venta";

export const EsquemaVentaMongo = new Schema<Venta>(
  {
    uuid: { type: String, required: true, unique: true },
    fecha_venta: { type: Date },
    total_venta: { type: Number },
    numero_factura: { type: Number },
    producto: [
      {
        uuid: { type: String },
        nombre: { type: String },
        cantidad: { type: Number },
        precio: { type: Number },
      },
    ],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

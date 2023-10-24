import { Schema } from "mongoose";
import { Producto } from "./producto";

export const  EsquemaProductoMongo = new Schema<Producto>(
    {
        uuid: {type: String, required: true, unique: false},
        nombre: {type: String},
        precio_de_compra: {type: Number},
        precio_de_venta: {type: Number},
        stock_actual: {type: Number},
        stock_inicial: {type: Number},
        estatus: {type: String},
        imagen: {type: String},
        dado_de_baja: {type: Number},
        ventas: {type: Number},
        categoria: {type: String},
        user: {type: String},
    },
    {
        versionKey: false,
        timestamps: true,
      }
);
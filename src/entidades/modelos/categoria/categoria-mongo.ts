import { Schema } from "mongoose";
import { Categoria } from "./categoria";

export const EsquemaCategoriaMongo = new Schema<Categoria>(
    {
        uuid: {type: String, required: true, unique: false},
        nombre: {type: String},
        estatus: {type: String},
        usuario: {type: String},
    },
    {
        versionKey: false,
        timestamps: true,
      }
);
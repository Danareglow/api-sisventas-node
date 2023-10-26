import { Schema } from "mongoose";
import { Usuario } from "./usuario";
import crypto from "crypto";

export const EsquemaUsuarioMongo = new Schema<Usuario>(
  {
    uuid: { type: String, required: true, unique: true, default: () => crypto.randomUUID() },
    nombre: { type: String },
    apellido: { type: String },
    foto: { type: String },
    correo: { type: String },
    password: { type: String },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

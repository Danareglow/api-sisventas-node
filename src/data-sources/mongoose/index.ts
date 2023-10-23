// Importamos la biblioteca Mongoose, que se utiliza para interactuar con bases de datos MongoDB desde Node.js.
import mongoose from "mongoose";

// Obtenemos la URL de MongoDB de las variables de entorno.
const { MONGODB_URL } = process.env;

// Definimos una interfaz para las opciones de inicialización de Mongoose.
export interface InitMongooseOptions {
  mongoUrl: string; // La URL de la base de datos MongoDB.
}

// Definimos una función asincrónica para inicializar Mongoose.
export const initMongoose = async ({ mongoUrl }: InitMongooseOptions) => {
  // Obtenemos una referencia a la conexión de Mongoose.
  const connection = mongoose.connection;

  // Componemos la URL de conexión, dando prioridad a MONGODB_URL de las variables de entorno.
  const connectionUrl = MONGODB_URL || mongoUrl || "";

  // Escuchamos eventos en la conexión de Mongoose.

  // Manejamos errores en la conexión.
  connection.on("error", (error) => {
    console.error(`Error in Mongoose connection: ${JSON.stringify(error)}`);
    throw new Error(error);
  });

  // Manejamos la conexión exitosa.
  connection.on("connected", () => {
    console.info(`Mongoose: Connected to ${connectionUrl}`);
  });

  // Manejamos eventos de fallos de reconexión (reconexión fallida).
  connection.on("reconnectFailed", () => {
    console.error("Mongoose: DB Connection Lost, retries failed");
  });

  // Conectamos a la base de datos utilizando la URL de conexión proporcionada.
  await mongoose.connect(connectionUrl, {
    autoIndex: true, // Habilitamos la creación de índices automáticamente.
  });
};

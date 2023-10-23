// Importamos las funciones y tipos necesarios de otros archivos.
import { initMongoose, InitMongooseOptions } from "./mongoose";

// Definimos una interfaz para las opciones de inicialización de las fuentes de datos.
export interface InitDataSourcesOptions {
  mongoose: InitMongooseOptions; // Opciones para inicializar Mongoose.
}

// Definimos una función asincrónica para inicializar las fuentes de datos.
export const initDataSources = async ({ mongoose }: InitDataSourcesOptions) => {
  if (mongoose) {
    // Verificamos si se proporcionaron opciones para Mongoose.
    // Si es así, llamamos a la función initMongoose para inicializar la conexión a MongoDB.
    await initMongoose(mongoose);
  }
};

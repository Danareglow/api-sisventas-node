export interface Categoria{
    uuid: string;
    nombre: string;
    estatus: string;
    usuario: string;
}
export type OmitirUuidCategoria = Omit<Categoria, "uuid">;
export type CategoriaPartial = Partial<Categoria>
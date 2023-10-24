export interface Producto{
    uuid: string;
    nombre: string;
    precio_de_compra: number;
    precio_de_venta: number;
    stock_actual: number;
    stock_inicial: number;
    estatus: string;
    imagen: string;
    dado_de_baja: number;
    ventas: number;
    categoria: string;
    user: string;
}

export type OmitirUuidProducto = Omit<Producto, "uuid">;
export type ProductoPartial = Partial<Producto>;
export interface Producto {
    id: number; // ID <- tipo number para que pueda ser auto incremental
    img?: string; // ? <- indica que no es una propiedad estrictamente obligatoria
    alt?: string;
    nombre: string;
    precio: number;
    descripcion: string;
}


export interface Indumentaria{
    id: number; //<- 1200
    nombre: string;// "remera"
    fechaPublicacion: Date;// <- fechas: new date (12-03-45) 
    activo: boolean;//<-true/ false
}
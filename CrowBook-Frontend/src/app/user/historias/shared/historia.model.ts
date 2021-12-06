export class Historia {
    idHistoria: number;
    usuario: Object;
    nombreHistoria: string;
    imagenPortada: string;
    descripcionHistoria: string;
    cantidadResenas: number;
    calificacionTotal: number;
    fechaPublicacion: string;
    categoria: Object;
}

export class Capitulo {
    id: number;
    idHistoria: number;
    nombreCapitulo: string;
    contenidoCapitulo: string;
    cantidadComentarios: number;
    calificacion: number;
}
  

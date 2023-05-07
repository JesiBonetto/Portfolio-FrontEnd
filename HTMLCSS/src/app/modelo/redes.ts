export class Redes {
    id?: number;
    nombre: string;
    imagen: string;
    url: string;

    constructor(nombre: string, imagen: string, url: string){

        this.nombre = nombre;
        this.imagen = imagen;
        this.url = url;
    }
}

export class Persona {
    id?: number;
    nombre: string;
    edad: number;
    ciudad: string;
    sobre_mi: string;
    foto: string;
    baner: string;

    constructor( nombre: string, edad: number, ciudad: string, sobre_mi: string, foto: string,
                baner: string){
                    
        this.nombre = nombre;
        this.edad = edad;
        this.ciudad = ciudad;
        this.sobre_mi = sobre_mi;
        this.foto = foto;
        this.baner = baner;

    }
}

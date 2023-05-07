export class Proyectos {
    id?: number;
    nombre: string;
    inicio: string;
    fin: string;
    descripcion: string;
    url: string;
    tecnologia: string;

    constructor(nombre: string, inicio: string,
                fin: string, descripcion: string,
                url: string, tecnologia: string)
{
        this.nombre = nombre;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.url = url;
        this.tecnologia = tecnologia;
}
}

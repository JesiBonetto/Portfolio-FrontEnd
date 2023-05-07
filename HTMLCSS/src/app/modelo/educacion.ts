export class Educacion {
    id?: number;
    titulo: string;
    academia: string;

    constructor(titulo:string, academia: string){
        
        this.titulo = titulo;
        this.academia = academia;
    }
}

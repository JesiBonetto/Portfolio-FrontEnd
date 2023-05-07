export class Experiencia {
    id?: number;
    empresa: string;
    inicio: string;
    fin: string;
    descripcion: string;
    logoEmpresa: string;

    constructor(empresa: string, inicio: string, 
                fin: string, descripcion: string, 
                logoEmpresa:string) {

        this.empresa = empresa;
        this.inicio = inicio;
        this.fin = fin;
        this.descripcion = descripcion;
        this.logoEmpresa = logoEmpresa;
}
}

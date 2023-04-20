import { Component, OnInit } from '@angular/core';
import { PortfolioServiceService } from 'src/app/service/portfolio.service';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{

  nombre: string = '';
  apellido: string = '';

  constructor (
    private portfolioService: PortfolioServiceService) {}

    ngOnInit(): void {
      this.portfolioService.getDatos().subscribe(datos => {
        console.log(datos);
        this.nombre=datos.nombre;
        this.apellido=datos.apellido;
      });
    }

}

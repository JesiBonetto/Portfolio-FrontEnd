import { Component, OnInit } from '@angular/core';
import { Redes } from 'src/app/modelo/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  isLogged = false;
  redes: Redes[] = [];
  verBtnAgregar: boolean = false;

  constructor(private redesService: RedesService){

    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }
  ngOnInit(): void {
    this.verRedes();
  }

  verRedes(): void{
     this.redesService.getAll().subscribe (data => {this.redes = data});
  }

  agregarRed(redes: Redes){
    this.redesService.create(redes).subscribe((data) =>{
      this.redes.push(data);
      this.verRedes();
    });
  }

  delete (id: number) {
    if (id != undefined) {
        this.redesService.delete(id).subscribe(
          data => {
            this.verRedes();
          }); 
          } else {
            return;
          }
    }

  agregar(): void{
    this.verBtnAgregar = true;
  }



}



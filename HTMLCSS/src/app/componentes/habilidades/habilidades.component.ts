import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { AuthService } from 'src/app/service/auth.service';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit{
  isLogged = false;
  habilidades: Habilidades[] = [];
  habilidad:any;
  data: any;
  verBtnAgregar: boolean = false;
  verBtnEditar: boolean = false;
  selectHabilidad: any;

  @Output() habilidadesEvent = new EventEmitter<Habilidades>();

  constructor(private habilidadesService: HabilidadesService){
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
    
    ngOnInit(): void {

      this.verHabilidades();
      
  }
  verHabilidades(): void {
    this.habilidadesService.getAll().subscribe (data => {this.habilidades = data});  
  }

  agregarHabilidad(habilidades: Habilidades){
    this.habilidadesService.create(habilidades).subscribe((data) =>{
      this.habilidades.push(data);
      this.verHabilidades();
    });
  }

  editarHabilidad(habilidades: Habilidades){
    this.habilidadesService.update(habilidades.id!,habilidades).subscribe((data) =>{
      this.habilidades.push(data);
      this.verHabilidades();
    });
  }


  delete (id?: number) {
    if (id != undefined) {
        this.habilidadesService.delete(id).subscribe(
          data => {
            this.verHabilidades();
          }); 
          } else {
            return;
          }
    }

    agregar(): void{
      this.verBtnAgregar = true;
    }

    editar(habilidades: Habilidades): void{
      this.selectHabilidad = habilidades;
      this.habilidadesEvent.emit(habilidades);
      this.verBtnEditar = true;
    }
  }

  
    
  








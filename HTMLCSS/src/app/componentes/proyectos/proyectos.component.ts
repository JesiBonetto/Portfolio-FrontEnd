import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit{
  isLogged = false;
  proyectos: Proyectos[] = [];
  verBtnAgregar: boolean = false;
  verBtnEditar: boolean = false;
  selectProyecto: any;
  
  @Output() proyectosEvent = new EventEmitter<Proyectos>();

  constructor(private proyectosService: ProyectosService){

    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  ngOnInit(): void {
    this.verProyectos();
  }

  verProyectos(): void{
    this.proyectosService.getAll().subscribe (data => {this.proyectos = data});
  }

  agregarProyectos(proyectos: Proyectos){
    this.proyectosService.create(proyectos).subscribe((data) =>{
      this.proyectos.push(data);
      this.verProyectos();
    });
  }

  editarProyectos(proyectos: Proyectos){
    this.proyectosService.update(proyectos.id!,proyectos).subscribe((data) =>{
      this.proyectos.push(data);
      this.verProyectos();
    });
  }

  delete (id: number) {
    if (id != undefined) {
        this.proyectosService.delete(id).subscribe(
          data => {
            this.verProyectos();
          }); 
          } else {
            return;
          }
    }

    agregar(): void{
      this.verBtnAgregar = true;
    }

    editar(proyectos: Proyectos): void{
      this.selectProyecto = proyectos;
      this.proyectosEvent.emit(proyectos);
      this.verBtnEditar = true;
    }

}

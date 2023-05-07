import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit{
  isLogged = false;
  experiencia: Experiencia[] = [];
  verBtnAgregar: boolean = false;
  verBtnEditar: boolean = false;
  selectExperiencia: any;

  @Output() experienciaEvent = new EventEmitter<Experiencia>();
  

  constructor(private experienciaService: ExperienciaService){

    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  ngOnInit(): void {
    this.verExperiencia();
    
  }

  verExperiencia(): void{
    this.experienciaService.getAll().subscribe (data => this.experiencia = data);
  }

  agregarExperiencia(experiencia: Experiencia){
    this.experienciaService.create(experiencia).subscribe((data) =>{
      this.experiencia.push(data);
      this.verExperiencia();
    });
  }

  editarExperiencia(experiencia: Experiencia){
    this.experienciaService.update(experiencia.id!,experiencia).subscribe((data) =>{
      this.experiencia.push(data);
      this.verExperiencia();
    });
  }

  delete (id: number) {
    if (id != undefined) {
        this.experienciaService.delete(id).subscribe(
          data => {
            this.verExperiencia();
          }); 
          } else {
            return;
          }
    }

    agregar(): void{
      this.verBtnAgregar = true;
    }

    editar(experiencia: Experiencia): void{
      this.selectExperiencia = experiencia;
      this.experienciaEvent.emit(experiencia);
      this.verBtnEditar = true;
    }

    

}

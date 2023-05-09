import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{
  isLogged = false;
  educacion: Educacion [] = [];
  educaciones: any;
  verBtnAgregar: boolean = false;
  verBtnEditar: boolean = false;
  selectEducacion: any;

  @Output() educacionEvent = new EventEmitter<Educacion>();

  constructor(private educacionService: EducacionService){

    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  
  
  ngOnInit(): void {
    this.verEducaciones();
    
  }

  verEducaciones(): void{
    this.educacionService.getAll().subscribe (data => {this.educacion = data});
  }

  agregarEducacion(educacion: Educacion){
    this.educacionService.create(educacion).subscribe((data) =>{
      this.educacion.push(data);
      this.verEducaciones();
    });
  }

  editarEducacion(educacion: Educacion){
    this.educacionService.update(educacion.id!,educacion).subscribe((data) =>{
      this.educacion.push(data);
      this.verEducaciones();
    });
  }

  delete (id: number) {
    if (id != undefined) {
        this.educacionService.delete(id).subscribe(
          data => {
            this.verEducaciones();
          }); 
          } else {
            return;
          }
    }

    agregar(): void{
      this.verBtnAgregar = true;
    }

    editar(educacion: Educacion): void{
      this.selectEducacion = educacion;
      this.educacionEvent.emit(educacion);
      this.verBtnEditar = true;
    }

}

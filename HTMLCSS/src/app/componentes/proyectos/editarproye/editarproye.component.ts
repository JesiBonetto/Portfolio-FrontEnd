import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-editarproye',
  templateUrl: './editarproye.component.html',
  styleUrls: ['./editarproye.component.css']
})
export class EditarproyeComponent implements OnInit {
  @Input() proyectos!: Proyectos;
  @Output() onEditarProy: EventEmitter<Proyectos> = new EventEmitter();
  @Output() cerrarBtnEditPro = new EventEmitter<boolean>();

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.proyectosService.update(this.proyectos.id!, this.proyectos).subscribe((data) => {
      this.onEditarProy.emit(data);
      this.cerrarBtnEditPro.emit(true);
    });
  }


}

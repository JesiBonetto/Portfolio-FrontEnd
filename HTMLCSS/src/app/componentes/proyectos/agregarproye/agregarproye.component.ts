import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-agregarproye',
  templateUrl: './agregarproye.component.html',
  styleUrls: ['./agregarproye.component.css']
})
export class AgregarproyeComponent implements OnInit {
  newProyecto: Proyectos = new Proyectos('', '', '', '', '', '');

  @Output() onAgregarProyecto: EventEmitter<Proyectos> = new EventEmitter();
  @Output() cerrarBtnAgrPro = new EventEmitter<boolean>();

  constructor(private proyectosService: ProyectosService) {}

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgrPro.emit(true);
  }

  onSubmit(): void {
    if (
      this.newProyecto.nombre == '' ||
      this.newProyecto.descripcion == '' ||
      this.newProyecto.url == ''
    ) {
      alert(
        'La experiencia debe tener al menos un nombre, una descripción y una dirección url.'
      );
      return;
    }
    this.proyectosService.create(this.newProyecto).subscribe((data) => {
      this.onAgregarProyecto.emit(data);
      this.cerrarBtnAgrPro.emit(true);
    });
  }


}

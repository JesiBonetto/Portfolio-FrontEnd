import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-agregaredu',
  templateUrl: './agregaredu.component.html',
  styleUrls: ['./agregaredu.component.css']
})
export class AgregareduComponent implements OnInit {
  newEstudio: Educacion = new Educacion('','');

  @Output() onAgregarEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() cerrarBtnAgregar = new EventEmitter<boolean>();

  constructor(private educacionService: EducacionService) {}

  ngOnInit(): void {}

  cerrar(): void {
    this.cerrarBtnAgregar.emit(true);
  }

  onSubmit(): void {
    if (
      this.newEstudio.titulo == '' ||
      this.newEstudio.academia == '' 
    ) {
      alert('El estudio debe tener al menos un título o una academia.');
      return;
    }
    this.educacionService.create(this.newEstudio).subscribe((data) => {
      this.onAgregarEducacion.emit(data);
      this.cerrarBtnAgregar.emit(true);
    });
  }

}

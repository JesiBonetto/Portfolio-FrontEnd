import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-agregarexpe',
  templateUrl: './agregarexpe.component.html',
  styleUrls: ['./agregarexpe.component.css']
})
export class AgregarexpeComponent implements OnInit {
  newExperiencia: Experiencia = new Experiencia('', '', '', '', '');

  @Output() onAgregarExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() cerrarBtnAgrExpe = new EventEmitter<boolean>();

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgrExpe.emit(true);
  }

  onSubmit(): void {
    if (
      this.newExperiencia.empresa == '' ||
      this.newExperiencia.descripcion == '' 
    ) {
      alert(
        'La experiencia debe tener al menos una empresa y descripción.'
      );
      return;
    }
    this.experienciaService.create(this.newExperiencia).subscribe((data) => {
      this.onAgregarExperiencia.emit(data);
      this.cerrarBtnAgrExpe.emit(true);
    });
  }

}

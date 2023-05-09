import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregaredu',
  templateUrl: './agregaredu.component.html',
  styleUrls: ['./agregaredu.component.css']
})
export class AgregareduComponent implements OnInit {
  newEstudio: Educacion = new Educacion('','');
  form: FormGroup;

  @Output() onAgregarEducacion: EventEmitter<Educacion> = new EventEmitter();
  @Output() cerrarBtnAgregar = new EventEmitter<boolean>();

  constructor(private educacionService: EducacionService,
               private formBuilder: FormBuilder) {

  ///Grupo de controles para el formulario.
  this.form= this.formBuilder.group({
    titulo:['', [Validators.required]],
    academia:['',[Validators.required]]
 })
}

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgregar.emit(true);
  }

  onEnviar(): void {
    if (this.form.valid) {
      this.newEstudio.titulo = this.form.get('titulo')?.value;
      this.newEstudio.academia = this.form.get('academia')?.value;

    this.educacionService.create(this.newEstudio).subscribe((data) => {
      this.onAgregarEducacion.emit(data);
      this.cerrarBtnAgregar.emit(true);
    });
  }
}

}

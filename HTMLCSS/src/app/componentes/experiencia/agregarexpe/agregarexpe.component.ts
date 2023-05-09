import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarexpe',
  templateUrl: './agregarexpe.component.html',
  styleUrls: ['./agregarexpe.component.css']
})
export class AgregarexpeComponent implements OnInit {
  newExperiencia: Experiencia = new Experiencia('', '', '', '', '');
  form: FormGroup;

  @Output() onAgregarExperiencia: EventEmitter<Experiencia> = new EventEmitter();
  @Output() cerrarBtnAgregar = new EventEmitter<boolean>();

  constructor(private experienciaService: ExperienciaService,
              private formBuilder: FormBuilder) {

                ///Grupo de controles para el formulario.
    this.form= this.formBuilder.group({
      empresa:['', [Validators.required]], 
      inicio:['',[Validators.required]],
      fin:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      logoEmpresa:['',[Validators.required]]
   })
              }

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgregar.emit(true);
  }

  onEnviar(): void {
    if (this.form.valid) {
      this.newExperiencia.empresa = this.form.get('empresa')?.value;
      this.newExperiencia.inicio = this.form.get('inicio')?.value;
      this.newExperiencia.fin = this.form.get('fin')?.value;
      this.newExperiencia.descripcion = this.form.get('descripcion')?.value;
      this.newExperiencia.logoEmpresa = this.form.get('logoEmpresa')?.value;

      this.experienciaService.create(this.newExperiencia).subscribe((data) => {
      this.onAgregarExperiencia.emit(data);
      this.cerrarBtnAgregar.emit(true);
    });
  }
}

}

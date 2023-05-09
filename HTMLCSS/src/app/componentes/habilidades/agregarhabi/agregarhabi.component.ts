import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-agregarhabi',
  templateUrl: './agregarhabi.component.html',
  styleUrls: ['./agregarhabi.component.css']
})
export class AgregarhabiComponent implements OnInit {
  newHabilidad: Habilidades = new Habilidades('', 0,'');
  form: FormGroup;

  @Output() onAgregarHabilidad: EventEmitter<Habilidades> = new EventEmitter();
  @Output() cerrarBtnAgrHabi = new EventEmitter<boolean>();

  constructor(private habilidadesService: HabilidadesService,
                private formBuilder: FormBuilder) {

    ///Grupo de controles para el formulario.
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      porcentaje:['',[Validators.required, Validators.min(0), Validators.max(100)]], 
      color:['',[Validators.required]]
   })
  }

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgrHabi.emit(true);
  }

  onEnviar(): void {
    if (this.form.valid) {
      this.newHabilidad.nombre = this.form.get('nombre')?.value;
      this.newHabilidad.porcentaje = this.form.get('porcentaje')?.value;
      this.newHabilidad.color = this.form.get('color')?.value;
    
    this.habilidadesService.create(this.newHabilidad).subscribe((data) => {
      this.onAgregarHabilidad.emit(data);
      this.cerrarBtnAgrHabi.emit(true);
    });
  }
  }

}

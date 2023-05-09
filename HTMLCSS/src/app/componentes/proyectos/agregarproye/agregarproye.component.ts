import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Proyectos } from 'src/app/modelo/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarproye',
  templateUrl: './agregarproye.component.html',
  styleUrls: ['./agregarproye.component.css']
})
export class AgregarproyeComponent implements OnInit {
  newProyecto: Proyectos = new Proyectos('', '', '', '', '', '');
  form: FormGroup;

  @Output() onAgregarProyecto: EventEmitter<Proyectos> = new EventEmitter();
  @Output() cerrarBtnAgrPro = new EventEmitter<boolean>();

  constructor(private proyectosService: ProyectosService,
              private formBuilder: FormBuilder) {

                ///Grupo de controles para el formulario.
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      incio:['',[Validators.required]], 
      fin:['',[Validators.required]],
      descripcion:['',[Validators.required]],
      url:['',[Validators.required]],
      tecnologia:['',[Validators.required]]
   })
              }

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgrPro.emit(true);
  }

  onEnviar(): void {
    if (this.form.valid) {
      this.newProyecto.nombre = this.form.get('nombre')?.value;
      this.newProyecto.inicio = this.form.get('inicio')?.value;
      this.newProyecto.fin = this.form.get('fin')?.value;
      this.newProyecto.descripcion = this.form.get('descripcion')?.value;
      this.newProyecto.url = this.form.get('url')?.value;
      this.newProyecto.tecnologia = this.form.get('tecnologia')?.value;

    this.proyectosService.create(this.newProyecto).subscribe((data) => {
      this.onAgregarProyecto.emit(data);
      this.cerrarBtnAgrPro.emit(true);
    });
  }
}

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Redes } from 'src/app/modelo/redes';
import { RedesService } from 'src/app/service/redes.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregarred',
  templateUrl: './agregarred.component.html',
  styleUrls: ['./agregarred.component.css']
})
export class AgregarredComponent implements OnInit {
  newRed: Redes = new Redes('', '', '');
  form: FormGroup;

  @Output() onAgregarRed: EventEmitter<Redes> = new EventEmitter();
  @Output() cerrarBtnAgregar = new EventEmitter<boolean>();

  constructor(private redesService: RedesService,
              private formBuilder: FormBuilder) {

                ///Grupo de controles para el formulario.
    this.form= this.formBuilder.group({
      nombre:['', [Validators.required]],
      imagen:['',[Validators.required]], 
      url:['',[Validators.required]]
   })
    }

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgregar.emit(true);
  }

  onEnviar(): void {
    if (this.form.valid) {
      this.newRed.nombre = this.form.get('nombre')?.value;
      this.newRed.imagen = this.form.get('imagen')?.value;
      this.newRed.url = this.form.get('url')?.value;

    this.redesService.create(this.newRed).subscribe((data) => {
      this.onAgregarRed.emit(data);
      this.cerrarBtnAgregar.emit(true);
    });
  }
}

}

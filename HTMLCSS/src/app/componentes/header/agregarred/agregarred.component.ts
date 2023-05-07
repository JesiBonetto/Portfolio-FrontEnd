import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Redes } from 'src/app/modelo/redes';
import { RedesService } from 'src/app/service/redes.service';

@Component({
  selector: 'app-agregarred',
  templateUrl: './agregarred.component.html',
  styleUrls: ['./agregarred.component.css']
})
export class AgregarredComponent implements OnInit {
  newRed: Redes = new Redes('', '', '');

  @Output() onAgregarRed: EventEmitter<Redes> = new EventEmitter();
  @Output() cerrarBtnAgrRed = new EventEmitter<boolean>();

  constructor(private redesService: RedesService) {}

  ngOnInit(): void {}

  close(): void {
    this.cerrarBtnAgrRed.emit(true);
  }

  onSubmit(): void {
    if (
      this.newRed.nombre == '' ||
      this.newRed.imagen == '' ||
      this.newRed.url == ''
    ) {
      alert(
        'La experiencia debe tener al menos un nombre, una imagen y una direccion url.'
      );
      return;
    }
    this.redesService.create(this.newRed).subscribe((data) => {
      this.onAgregarRed.emit(data);
      this.cerrarBtnAgrRed.emit(true);
    });
  }

}

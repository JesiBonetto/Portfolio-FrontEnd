import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Habilidades } from 'src/app/modelo/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-editarhabi',
  templateUrl: './editarhabi.component.html',
  styleUrls: ['./editarhabi.component.css']
})
export class EditarhabiComponent implements OnInit {
  @Input() habilidades!: Habilidades;
  @Output() onEditarHabi: EventEmitter<Habilidades> = new EventEmitter();
  @Output() cerrarBtnEditHab = new EventEmitter<boolean>();

  constructor(private habilidadesService: HabilidadesService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.habilidadesService.update(this.habilidades.id!, this.habilidades).subscribe((data) => {
      this.onEditarHabi.emit(data);
      this.cerrarBtnEditHab.emit(true);
    });
  }


}

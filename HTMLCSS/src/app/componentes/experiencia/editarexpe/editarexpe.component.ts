import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/modelo/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-editarexpe',
  templateUrl: './editarexpe.component.html',
  styleUrls: ['./editarexpe.component.css']
})
export class EditarexpeComponent implements OnInit {
  @Input() experiencia!: Experiencia;
  @Output() onEditarExpe: EventEmitter<Experiencia> = new EventEmitter();
  @Output() cerrarBtnEditEx = new EventEmitter<boolean>();

  constructor(private experienciaService: ExperienciaService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.experienciaService.update(this.experiencia.id!, this.experiencia).subscribe((data) => {
      this.onEditarExpe.emit(data);
      this.cerrarBtnEditEx.emit(true);
    });
  }

}

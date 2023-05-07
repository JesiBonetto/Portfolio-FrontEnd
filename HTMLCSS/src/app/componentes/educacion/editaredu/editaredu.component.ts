import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/modelo/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-editaredu',
  templateUrl: './editaredu.component.html',
  styleUrls: ['./editaredu.component.css']
})
export class EditareduComponent implements OnInit {
  @Input() educacion!: Educacion;
  @Output() onEditarEdu: EventEmitter<Educacion> = new EventEmitter();
  @Output() cerrarBtnEditar = new EventEmitter<boolean>();

  constructor(private educacionService: EducacionService) {}
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.educacionService
        .update(this.educacion.id!, this.educacion)
        .subscribe((data) => {
          this.onEditarEdu.emit(data);
          this.cerrarBtnEditar.emit(true);
        });
    }

}

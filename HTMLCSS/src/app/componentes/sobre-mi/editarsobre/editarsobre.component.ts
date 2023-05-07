import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editarsobre',
  templateUrl: './editarsobre.component.html',
  styleUrls: ['./editarsobre.component.css']
})
export class EditarsobreComponent implements OnInit {
  @Input() persona!: Persona;
  @Output() onEditarPers: EventEmitter<Persona> = new EventEmitter();
  @Output() cerrarBtnEditPers = new EventEmitter<boolean>();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.personaService.update(this.persona.id!, this.persona).subscribe((data) => {
      this.onEditarPers.emit(data);
      this.cerrarBtnEditPers.emit(true);
    });
  }


}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-editarbaner',
  templateUrl: './editarbaner.component.html',
  styleUrls: ['./editarbaner.component.css']
})
export class EditarbanerComponent implements OnInit {
  @Input() persona!: Persona;
  @Output() onEditarBa: EventEmitter<Persona> = new EventEmitter();
  @Output() cerrarBtnEditBa = new EventEmitter<boolean>();

  constructor(private personaService: PersonaService) {}

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.personaService.update(this.persona.id!, this.persona).subscribe((data) => {
      this.onEditarBa.emit(data);
      this.cerrarBtnEditBa.emit(true);
    });
  }



}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';


@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.css']
})
export class SobreMiComponent implements OnInit{

  isLogged = false;
  persona: Persona[] = [];
  verBtnAgregar: boolean = false;
  verBtnEditar: boolean = false;
  selectPersona: any;


  @Output() personaEvent = new EventEmitter<Persona>();
  

  constructor ( private personaService: PersonaService) {
    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

    ngOnInit(): void {
      this.verPersona();
      }

      verPersona(): void{
        this.personaService.getAll().subscribe (data => {this.persona = data});
      }

      agregarPersona(persona: Persona){
        this.personaService.create(persona).subscribe((data) =>{
          this.persona.push(data);
          this.verPersona();
        });
      }

      editarPersona(persona: Persona){
        this.personaService.update(persona.id!,persona).subscribe((data) =>{
          this.persona.push(data);
          this.verPersona();
        });
      }

      delete (id: number) {
        if (id != undefined) {
            this.personaService.delete(id).subscribe(
              data => {
                this.verPersona();
              }); 
              } else {
                return;
              }
        }

        agregar(): void{
          this.verBtnAgregar = true;
        }

        editar(persona: Persona): void{
          this.selectPersona = persona;
          this.personaEvent.emit(persona);
          this.verBtnEditar = true;
        }
    }



import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Persona } from 'src/app/modelo/persona';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-baner',
  templateUrl: './baner.component.html',
  styleUrls: ['./baner.component.css']
})
export class BanerComponent implements OnInit{
  isLogged = false;
  persona: Persona[] = [];
  baner: any;
  verBtnEditar: boolean = false;
  selectBaner: any;

  @Output() banerEvent = new EventEmitter<Persona>();

  constructor(private personaService: PersonaService){

    const authenticated = localStorage.getItem('loggedUser');
    if (authenticated && authenticated === 'true') {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    
  }
  ngOnInit(): void {
    this.verBaner();
  }

  verBaner(): void{
    this.personaService.getAll().subscribe (data => {this.persona = data});
  }

  editarBaner(baner: any){
    this.personaService.update(baner, baner).subscribe((data) =>{
      this.baner.push(data);
      this.verBaner();
    });
  }

  delete (id: number) {
    if (id != undefined) {
        this.personaService.delete(id).subscribe(
          data => {
            this.verBaner();
          }); 
          } else {
            return;
          }
    }

    editar(baner: any): void{
      this.selectBaner = baner;
      this.banerEvent.emit(baner);
      this.verBtnEditar = true;
    }

}

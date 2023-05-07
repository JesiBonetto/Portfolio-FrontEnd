import { Injectable } from '@angular/core';
import { Persona } from '../modelo/persona';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class PersonaService extends CrudServiceService<Persona>{
  
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'persona');
  }
}

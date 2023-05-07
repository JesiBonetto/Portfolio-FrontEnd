import { Injectable } from '@angular/core';
import { Experiencia } from '../modelo/experiencia';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService extends CrudServiceService<Experiencia>{
  
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'experiencia');
  }

  
}

import { Injectable } from '@angular/core';
import { Habilidades } from '../modelo/habilidades';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService extends CrudServiceService<Habilidades>{
  

  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'habilidades');
  }

  
}

import { Injectable } from '@angular/core';
import { Proyectos } from '../modelo/proyectos';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService extends CrudServiceService<Proyectos>{
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'proyectos');
  }

  
}

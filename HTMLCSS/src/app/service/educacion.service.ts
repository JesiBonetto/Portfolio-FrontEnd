import { Injectable } from '@angular/core';
import { Educacion } from '../modelo/educacion';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class EducacionService extends CrudServiceService<Educacion>{
  
  constructor( protected override httpClient: HttpClient) {
    super(httpClient, 'educacion');
  }

  
}

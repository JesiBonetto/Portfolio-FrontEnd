import { Injectable } from '@angular/core';
import { Redes } from '../modelo/redes';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CrudServiceService } from './crud.service.service';

@Injectable({
  providedIn: 'root'
})
export class RedesService extends CrudServiceService<Redes>{
  
  constructor(protected override httpClient: HttpClient) {
    super(httpClient, 'redes');
  }

  }

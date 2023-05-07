import { Injectable } from '@angular/core';
import { CrudServiceService } from './crud.service.service';
import { User } from '../modelo/user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService extends CrudServiceService<User> {
  constructor(protected override httpClient: HttpClient)  {
    super(httpClient, 'user');
  }
    
  }
  
  

  

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
//para hacer peticiones
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioServiceService {

  constructor(private http:HttpClient) { }

getDatos():Observable <any> {
  return this.http.get('assets/Json/Portfolio.json')
}
}

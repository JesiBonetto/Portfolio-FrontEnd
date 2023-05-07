import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export abstract class CrudServiceService<T> {
 protected baseUrl = "http://localhost:8080/";

  constructor(protected httpClient: HttpClient, protected url: string) { }
  getAll(): Observable<T[]>{
    return this.httpClient.get<T[]>(this.baseUrl + this.url +  '/ver/');
  }

  getById(id: number): Observable<T>{
    return this.httpClient.get<T>(this.baseUrl + this.url +  '/id/' + id);
  }

  create(item: T): Observable<T>{
    return this.httpClient.post<T>(this.baseUrl + this.url +  '/new/', item);
  }

  update(id: number, item: T): Observable<T>{
    return this.httpClient.put<T>(this.baseUrl  + this.url + '/editar/' + id, item);
  }

  delete(id: number): Observable<any> {
    return this.httpClient.delete(this.baseUrl + this.url + '/delete/' + id);
  }

}

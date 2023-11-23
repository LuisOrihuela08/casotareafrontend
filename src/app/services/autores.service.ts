import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AutoresModel } from '../model/autores.model';

@Injectable({
  providedIn: 'root'
})
export class AutoresService {

  constructor(private httpClient: HttpClient) {

  }

  getAutores(): Observable<AutoresModel[]>{
    return this.httpClient.get<AutoresModel[]>('http://localhost:8080/autores' + '/list').pipe(map(res=>res));
  }

  addAutores(request:any): Observable<AutoresModel[]>{
    return this.httpClient.post<any>('http://localhost:8080/autores' + '/agregar', request).pipe(map(res=>res));
  }
  updateAutores(request:any): Observable<any>{
    return this.httpClient.put<any>('http://localhost:8080/autores' + '/editar', request).pipe(map(res=>res));
  }
  deleteAutores(id_autor:number): Observable<any>{
    return this.httpClient.delete<any>('http://localhost:8080/autores' + '/eliminar/' + id_autor).pipe(map(res=>res));
  }
}

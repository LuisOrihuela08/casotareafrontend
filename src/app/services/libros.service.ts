import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LibrosModel } from '../model/libros.model';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private httpClient : HttpClient) {

   }

  getLibros(): Observable <LibrosModel[]>{
    return this.httpClient.get<LibrosModel[]>('http://localhost:8080/libros'+'/list').pipe(map(res => res));
  }
addLibros(request: any): Observable <any>{
  const headers = new HttpHeaders({
    'Content-type': 'application/json',
  });
  return this.httpClient.post<any>('http://localhost:8080/libros' + '/agregar', request, {headers: headers}).pipe(map(res=> res));
}
updateLibros(request:any):Observable <any>{
  return this.httpClient.put<any>('http://localhost:8080/libros' + '/editar', request).pipe(map(res => res));
}
deleteLibros(id_LIBRO:number): Observable <any>{
  return this.httpClient.delete<any>('http://localhost:8080/libros' + '/eliminar/' + id_LIBRO).pipe(map(res=>res));
}

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { AlquileresModel } from '../model/alquileres.model';

@Injectable({
  providedIn: 'root'
})
export class AlquileresService {

  constructor(private httpClient: HttpClient) { }

getAlquileres(): Observable<AlquileresModel[]>{
  return this.httpClient.get<AlquileresModel[]>('http://localhost:8080/alquiler' + '/list').pipe(map(res=>res));
}
addAlquileres(request:any): Observable<AlquileresModel[]>{
  return this.httpClient.post<any>('http://localhost:8080/alquiler' + '/agregar', request).pipe(map(res=>res));
}
updateAlquileres(request:any): Observable<any>{
  return this.httpClient.put<any>('http://localhost:8080/alquiler' + '/editar', request).pipe(map(res=>res));
}
deleteAlquileres(id: number): Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/alquiler' + '/eliminar' + id).pipe(map(res=>res));
}
}

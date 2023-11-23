import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { LectoresModel } from '../model/lectores.model';

@Injectable({
  providedIn: 'root'
})
export class LectoresService {

  constructor(private httpClient: HttpClient) {

  }

  getLectores(): Observable<LectoresModel[]> {
    return this.httpClient.get<LectoresModel[]>('http://localhost:8080/lectores' + '/list').pipe(map(res => res));
  }
  addLectores(request: any): Observable<LectoresModel[]> {
    return this.httpClient.post<any>('http://localhost:8080/lectores' + '/agregar', request).pipe(map(res => res));
  }
  updateLectores(request: any): Observable<any> {
    return this.httpClient.put<any>('http://localhost:8080/lectores' + '/editar' , request).pipe(map(res => res));
  }
  deleteLectores(id: number): Observable<any> {
    return this.httpClient.delete<any>('http://localhost:8080/lectores' + '/eliminar/' + id).pipe(map(res => res));
  }

}

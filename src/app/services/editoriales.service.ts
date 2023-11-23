import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { EditorialesModel } from '../model/editoriales.model';

@Injectable({
  providedIn: 'root'
})
export class EditorialesService {

  constructor(private httpClient: HttpClient) { }

getEditoriales(): Observable<EditorialesModel[]>{
return this.httpClient.get<EditorialesModel[]>('http://localhost:8080/editoriales' + '/list').pipe(map(res=>res));
}
addEditoriales(request:any): Observable<any>{
  return this.httpClient.post<any>('http://localhost:8080/editoriales' + '/agregar', request).pipe(map(res=>res));
}
updateEditoriales(request:any):Observable<any>{
  return this.httpClient.put<any>('http://localhost:8080/editoriales' + '/editar', request).pipe(map(res=>res));
}
deleteEditoriales(id_EDITORIAL:number): Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/editoriales' + '/eliminar/' + id_EDITORIAL).pipe(map(res=>res));
}
}

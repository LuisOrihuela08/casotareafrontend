import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { CategoriasModel } from '../model/categorias.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient: HttpClient) { }

getCategorias(): Observable<CategoriasModel[]>{
  return this.httpClient.get<CategoriasModel[]>('http://localhost:8080/categorias' +'/list').pipe(map(res=>res));
}

addCategorias(request:any): Observable<CategoriasModel[]>{
return this.httpClient.post<any>('http://localhost:8080/categorias' + '/agregar', request).pipe(map(res=>res));
}
updateCategorias(request:any): Observable<any>{
  return this.httpClient.put<any>('http://localhost:8080/categorias' + '/editar', request).pipe(map(res=>res));
}
deleteCategorias(id_CATEGORIA:number): Observable<any>{
  return this.httpClient.delete<any>('http://localhost:8080/categorias' + '/eliminar/' + id_CATEGORIA).pipe(map(res=>res));
}


}

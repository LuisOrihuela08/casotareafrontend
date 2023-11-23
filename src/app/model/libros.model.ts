import { AutoresModel } from "./autores.model";
import { CategoriasModel } from "./categorias.model";
import { EditorialesModel } from "./editoriales.model";

export class LibrosModel{
  id_LIBRO: number=0;
  titulo: string ='';
  autor?: AutoresModel;
  categoria?: CategoriasModel;
  descripcion: string ='';
  editorial?: EditorialesModel;
  fecha_LANZAMIENTO: string ='';
  idioma: string ='';
  paginas: number =0;
  portada: string ='';

}

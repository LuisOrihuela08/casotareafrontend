import { LectoresModel } from "./lectores.model";
import { LibrosModel } from "./libros.model";

export class AlquileresModel{
  id_alquileres: number=0;
  fecha_entrada: string='';
  fecha_salida: string='';
  lector?: LectoresModel;
  libro?: LibrosModel;
}

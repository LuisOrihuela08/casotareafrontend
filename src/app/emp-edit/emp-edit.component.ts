import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { AutoresModel } from '../model/autores.model';
import { CategoriasModel } from '../model/categorias.model';
import { EditorialesModel } from '../model/editoriales.model';
import { AutoresService } from '../services/autores.service';
import { CategoriasService } from '../services/categorias.service';
import { EditorialesService } from '../services/editoriales.service';
import { LibrosService } from '../services/libros.service';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  empForm: FormGroup;
  listAutores: AutoresModel[] = [];
  listCategorias: CategoriasModel[] = [];
  listEditoriales: EditorialesModel[] = [];

  constructor(
    private _fb: FormBuilder,
    private librosService: LibrosService,
    private _dialogRef: MatDialogRef<EmpEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService,
    private autoresService: AutoresService,
    private categoriasService: CategoriasService,
    private editorialesService: EditorialesService
  ) {
    this.empForm = this._fb.group({
      id_LIBRO: 0,
      titulo: '',
      autor: { id_AUTOR: 0, autor: '' },
      categoria: { id_CATEGORIA: 0, categoria: '' },
      descripcion: '',
      editorial: { id_EDITORIAL: 0, editorial: '' },
      fecha_LANZAMIENTO: '',
      idioma: '',
      paginas: '',
      portada: '',
    })

  }
  ngOnInit(): void {
    this.autoresService.getAutores().subscribe(
      (autores) => {
        this.listAutores = autores;
        this.empForm.patchValue({ autor: this.getAutorSeleccionado() });
      }
    );

    this.categoriasService.getCategorias().subscribe(
      (categorias) => {
        this.listCategorias = categorias;
        this.empForm.patchValue({ categoria: this.getCategoriaSeleccionada() });
      }
    );

    this.editorialesService.getEditoriales().subscribe(
      (editoriales) => {
        this.listEditoriales = editoriales;
        this.empForm.patchValue({ editorial: this.getEditorialSeleccionada() });
      }
    )

    this.empForm.patchValue(this.data);
    console.log(this.empForm.value)
  }

  getAutorSeleccionado(): AutoresModel | null {
    return this.listAutores.find(
      (autor) => autor.id_AUTOR === this.data?.autor?.id_AUTOR
    ) || null;

  }
  getCategoriaSeleccionada(): CategoriasModel | null {
    return this.listCategorias.find(
      (categoria) => categoria.id_CATEGORIA === this.data?.categoria?.id_CATEGORIA
    ) || null;
  }
  getEditorialSeleccionada(): EditorialesModel | null {
    return this.listEditoriales.find(
      (editorial) => editorial.id_EDITORIAL === this.data?.editorial?.id_EDITORIAL
    ) || null;
  }


  onFormSubmit() {
    const { value } = this.empForm
    console.log(value)

    // Formatear la fecha antes de enviarla al servicio
    //const fechaFormateada = this.formatearFecha(value.fecha_LANZAMIENTO);
   // value.fecha_LANZAMIENTO = fechaFormateada;

    if (this.empForm.valid) {
      if (this.data) {

        this.librosService.updateLibros(value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Empleado editado exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.librosService.addLibros(value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Libro añadido exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }

    }
  }

  // Método para formatear la fecha
  //formatearFecha(fecha: string): string {
  //  if (!fecha) {
  //    return ''; // Manejar el caso cuando la fecha es nula
  //  }
  //  const date = new Date(fecha);
  ///  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
   // return date.toLocaleDateString('es-ES', options);
 // }




}

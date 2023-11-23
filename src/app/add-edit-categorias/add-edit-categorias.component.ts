import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CategoriasComponent } from '../categorias/categorias.component';
import { CoreService } from '../core/core.service';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-add-edit-categorias',
  templateUrl: './add-edit-categorias.component.html',
  styleUrls: ['./add-edit-categorias.component.css']
})
export class AddEditCategoriasComponent implements OnInit{

categoriasForm: FormGroup;

constructor(private _fb: FormBuilder,
  private categoriasService: CategoriasService,
  private _dialogRef: MatDialogRef<CategoriasComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any,
  private _coreService: CoreService){

    this.categoriasForm = this._fb.group({
      id_CATEGORIA:0,
      categoria: '',
    })
  }

  ngOnInit(): void {
      this.categoriasForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.categoriasForm.valid) {
      if (this.data) {
        this.categoriasService.updateCategorias(this.categoriasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Categoria editado exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.categoriasService.addCategorias(this.categoriasForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Categoria añadido exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      }

    }
  }

}

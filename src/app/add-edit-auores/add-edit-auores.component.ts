import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AutoresComponent } from '../autores/autores.component';
import { CoreService } from '../core/core.service';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-add-edit-auores',
  templateUrl: './add-edit-auores.component.html',
  styleUrls: ['./add-edit-auores.component.css']
})
export class AddEditAuoresComponent implements OnInit {

  autoresForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private autoresService: AutoresService,
    private _dialogRef: MatDialogRef<AutoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.autoresForm = this._fb.group({
      id_AUTOR: 0,
      autor: '',
    })
  }

  ngOnInit(): void {
this.autoresForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.autoresForm.valid) {
      if (this.data) {
        this.autoresService.updateAutores(this.autoresForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Autor editado exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.autoresService.addAutores(this.autoresForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Autor añadido exitosamente!');
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

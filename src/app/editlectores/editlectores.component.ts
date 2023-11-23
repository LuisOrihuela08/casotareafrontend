import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { LectoresService } from '../services/lectores.service';

@Component({
  selector: 'app-editlectores',
  templateUrl: './editlectores.component.html',
  styleUrls: ['./editlectores.component.css']
})
export class EditlectoresComponent implements OnInit {
  lectoresForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private lectoresService: LectoresService,
    private _dialogRef: MatDialogRef<EditlectoresComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService
  ) {
    this.lectoresForm = this._fb.group({
      dnilector: 0,
      nombre: '',
      codigopostal: '',
      direccion: '',
      observaciones: '',
      telefono: '',
    })
  }
  ngOnInit(): void {
    this.lectoresForm.patchValue(this.data);
  }
  onFormSubmit() {
    if (this.lectoresForm.valid) {
      if (this.data) {
        this.lectoresService.updateLectores(this.lectoresForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Lector editado exitosamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          },
        });
      } else {
        this.lectoresService.addLectores(this.lectoresForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar('Lector añadido exitosamente!');
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

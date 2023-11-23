import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';
import { EditorialesComponent } from '../editoriales/editoriales.component';
import { EditorialesService } from '../services/editoriales.service';

@Component({
  selector: 'app-add-edit-editoriales',
  templateUrl: './add-edit-editoriales.component.html',
  styleUrls: ['./add-edit-editoriales.component.css']
})
export class AddEditEditorialesComponent implements OnInit {

  editorialesForm: FormGroup;

  constructor(private _fb: FormBuilder,
    private editorialesService: EditorialesService,
    private _dialogRef: MatDialogRef<EditorialesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _coreService: CoreService) {
    this.editorialesForm = this._fb.group({
      id_EDITORIAL: 0,
      editorial: '',
    })
  }

ngOnInit(): void {
this.editorialesForm.patchValue(this.data);
}

onFormSubmit() {
  if (this.editorialesForm.valid) {
    if (this.data) {
      this.editorialesService.updateEditoriales(this.editorialesForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Editorial editado exitosamente!');
          this._dialogRef.close(true);
        },
        error: (err: any) => {
          console.error(err);
        },
      });
    } else {
      this.editorialesService.addEditoriales(this.editorialesForm.value).subscribe({
        next: (val: any) => {
          this._coreService.openSnackBar('Editorial añadido exitosamente!');
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

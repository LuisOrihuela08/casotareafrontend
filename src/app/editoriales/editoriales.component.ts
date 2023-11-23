import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditEditorialesComponent } from '../add-edit-editoriales/add-edit-editoriales.component';
import { CoreService } from '../core/core.service';
import { EditorialesModel } from '../model/editoriales.model';
import { EditorialesService } from '../services/editoriales.service';

@Component({
  selector: 'app-editoriales',
  templateUrl: './editoriales.component.html',
  styleUrls: ['./editoriales.component.css']
})
export class EditorialesComponent implements OnInit{

  listEditoriales: EditorialesModel[]=[];

  displayedColumns:
  string[]=[
    'id_EDITORIAL',
    'editorial',
    'action',
  ]

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private editorialesService: EditorialesService,
    private _coreService: CoreService){}

ngOnInit(): void {
    this.getEditoriales();
}

getEditoriales() {
  this.editorialesService.getEditoriales().subscribe({
    next: (res) => {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;

    },
    error: console.log,
  });
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();

  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}

deleteEditoriales(id: number) {
  this.editorialesService.deleteEditoriales(id).subscribe({
    next: (res) => {
      this._coreService.openSnackBar('Editorial eliminado!', 'Hecho');
      this.getEditoriales();
    },
    error: console.log,
  });
}

updateEditoriales(data: any) {
  const dialogRef = this._dialog.open(AddEditEditorialesComponent, {
    data,
  });
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getEditoriales();
      }
    }
  });
}

openAddEditEditoriForm() {
  const dialogRef = this._dialog.open(AddEditEditorialesComponent);
  dialogRef.afterClosed().subscribe({
    next: (val) => {
      if (val) {
        this.getEditoriales();
      }
    }
  });
}

}

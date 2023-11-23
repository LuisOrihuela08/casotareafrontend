import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditAuoresComponent } from '../add-edit-auores/add-edit-auores.component';
import { CoreService } from '../core/core.service';
import { AutoresModel } from '../model/autores.model';
import { AutoresService } from '../services/autores.service';

@Component({
  selector: 'app-autores',
  templateUrl: './autores.component.html',
  styleUrls: ['./autores.component.css']
})
export class AutoresComponent implements OnInit {

  listAutores: AutoresModel[] = [];

  displayedColumns:
    string[] = [
      'id_AUTOR',
      'autor',
      'action',
    ]

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private autoresService: AutoresService,
    private _coreService: CoreService) { }

  ngOnInit(): void {
this.getAutores();
  }

  getAutores() {
    this.autoresService.getAutores().subscribe({
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

  deleteAutores(id: number) {
    this.autoresService.deleteAutores(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Autor eliminado!', 'Hecho');
        this.getAutores();
      },
      error: console.log,
    });
  }

  updateAutores(data: any) {
    const dialogRef = this._dialog.open(AddEditAuoresComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAutores();
        }
      }
    });
  }

  openAddEditAutForm() {
    const dialogRef = this._dialog.open(AddEditAuoresComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAutores();
        }
      }
    });
  }

}

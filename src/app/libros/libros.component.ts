import { Component, OnInit, ViewChild } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { CoreService } from '../core/core.service';
import { EmpEditComponent } from '../emp-edit/emp-edit.component';
import { LibrosModel } from '../model/libros.model';
import { LibrosService } from '../services/libros.service';



@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})

export class LibrosComponent implements OnInit{
listLibros: LibrosModel[]=[];

displayedColumns:
    string[] = ['id_LIBRO',
    'titulo',
      'autor',
      'categoria',
      'descripcion',
      'editorial',
      'fecha_LANZAMIENTO',
      'idioma',
      'paginas',
      'portada',
      'action'
    ];
    dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private _dialog: MatDialog,
      private librosService: LibrosService,
      private _coreService: CoreService
    ) { }

    ngOnInit(): void {
      this.getLibros();
          }



  getLibros() {
    this.librosService.getLibros().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;

      },
      error: console.log,
    });
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmpEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLibros();
        }
      }
    });
  }



  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteLibros(id_LIBRO: number) {
    this.librosService.deleteLibros(id_LIBRO).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Libro eliminado!', 'Hecho');
        this.getLibros();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmpEditComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLibros();
        }
      }
    });
  }


}

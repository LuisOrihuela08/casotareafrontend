import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AddEditCategoriasComponent } from '../add-edit-categorias/add-edit-categorias.component';
import { CoreService } from '../core/core.service';
import { CategoriasModel } from '../model/categorias.model';
import { CategoriasService } from '../services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {
  listCategorias: CategoriasModel[] = [];

  displayedColumns:
    string[] = [
      'id_CATEGORIA',
      'categoria',
      'action',
    ]

  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog,
    private categoriasService: CategoriasService,
    private _coreService: CoreService) { }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias() {
    this.categoriasService.getCategorias().subscribe({
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

  deleteCategorias(id: number) {
    this.categoriasService.deleteCategorias(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Categoria eliminado!', 'Hecho');
        this.getCategorias();
      },
      error: console.log,
    });
  }

  updateCategorias(data: any) {
    const dialogRef = this._dialog.open(AddEditCategoriasComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategorias();
        }
      }
    });
  }

  openAddEditCatForm() {
    const dialogRef = this._dialog.open(AddEditCategoriasComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getCategorias();
        }
      }
    });
  }
}

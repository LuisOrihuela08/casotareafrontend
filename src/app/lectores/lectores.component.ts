import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';
import { EditlectoresComponent } from '../editlectores/editlectores.component';
import { LectoresModel } from '../model/lectores.model';
import { LectoresService } from '../services/lectores.service';

@Component({
  selector: 'app-lectores',
  templateUrl: './lectores.component.html',
  styleUrls: ['./lectores.component.css']
})
export class LectoresComponent implements OnInit{
listLectores: LectoresModel[]=[];

displayedColumns:
string[]= [
  'dnilector',
  'nombre',
  'codigopostal',
  'direccion',
  'observaciones',
  'telefono',
  'action'
]

dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

constructor(private _dialog: MatDialog,
  private lectoresService: LectoresService,
  private _coreService: CoreService
  ){}



  ngOnInit(): void {
      this.getLectores();
  }

  getLectores() {
    this.lectoresService.getLectores().subscribe({
      next: (res) => {
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

  deleteLectores(id: number) {
    this.lectoresService.deleteLectores(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Lector eliminado!', 'Hecho');
        this.getLectores();
      },
      error: console.log,
    });
  }
  openAddEditLecForm() {
    const dialogRef = this._dialog.open(EditlectoresComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLectores();
        }
      }
    });
  }
  updateLectores(data: any) {
    const dialogRef = this._dialog.open(EditlectoresComponent, {
      data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getLectores();
        }
      }
    });
  }

}

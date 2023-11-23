import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';
import { AlquileresModel } from '../model/alquileres.model';
import { AlquileresService } from '../services/alquileres.service';

@Component({
  selector: 'app-alquileres',
  templateUrl: './alquileres.component.html',
  styleUrls: ['./alquileres.component.css']
})
export class AlquileresComponent implements OnInit{
listAlquileres: AlquileresModel []= [];

displayedColumns:
string[]=[
  'id_alquileres',
  'fecha_entrada',
  'fecha_salida',
  'lector',
  'libro',
]

dataSource!: MatTableDataSource<any>;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private _dialog: MatDialog,
      private alquileresService: AlquileresService,
      private _coreService: CoreService)
      {}



ngOnInit(): void {
    this.getAlquileres();
}
getAlquileres() {
  this.alquileresService.getAlquileres().subscribe({
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

}

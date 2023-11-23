import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { EmpEditComponent } from './emp-edit/emp-edit.component';

import { NgFor } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { LectoresComponent } from './lectores/lectores.component';
import { LibrosComponent } from './libros/libros.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EditlectoresComponent } from './editlectores/editlectores.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { AddEditAuoresComponent } from './add-edit-auores/add-edit-auores.component';
import { AddEditCategoriasComponent } from './add-edit-categorias/add-edit-categorias.component';
import { AddEditEditorialesComponent } from './add-edit-editoriales/add-edit-editoriales.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpEditComponent,
    NavbarComponent,
    LectoresComponent,
    AlquileresComponent,
    LibrosComponent,
    EditlectoresComponent,
    AutoresComponent,
    CategoriasComponent,
    EditorialesComponent,
    AddEditAuoresComponent,
    AddEditCategoriasComponent,
    AddEditEditorialesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    NgFor,
    MatSelectModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

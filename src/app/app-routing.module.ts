import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquileresComponent } from './alquileres/alquileres.component';
import { AppComponent } from './app.component';
import { AutoresComponent } from './autores/autores.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { EditorialesComponent } from './editoriales/editoriales.component';
import { LectoresComponent } from './lectores/lectores.component';
import { LibrosComponent } from './libros/libros.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/libros', pathMatch: 'full'
  },
  {
    path: '', component: AppComponent
  },
  {
    path: 'autores', component: AutoresComponent
  },
  {
    path: 'categorias', component: CategoriasComponent
  },
  {
    path: 'editoriales', component: EditorialesComponent
  },
  {
    path: 'libros', component: LibrosComponent
  },
  {
    path: 'lectores', component: LectoresComponent
  },
  {
    path: 'alquileres', component: AlquileresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

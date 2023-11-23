import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlquileresComponent } from '../alquileres/alquileres.component';
import { AppComponent } from '../app.component';
import { LectoresComponent } from '../lectores/lectores.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/libros', pathMatch: 'full'
  },
  {
    path: 'libros', component: AppComponent
  },
  {
    path: 'lectores', component: LectoresComponent
  },
  {
    path: 'alquileres', component: AlquileresComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class NavbarRoutingModule { }

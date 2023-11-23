import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LectoresComponent } from './lectores.component';


const routes: Routes = [
  {
    path: 'lectores', component: LectoresComponent
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
export class LectoresRoutingModule { }

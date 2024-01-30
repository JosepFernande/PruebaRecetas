import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByRecetaIdComponent } from './pages/by-receta-id/by-receta-id.component';


const routes: Routes = [
  {
    path: 'by/:id',
    component: ByRecetaIdComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class RecetaRoutingModule { }

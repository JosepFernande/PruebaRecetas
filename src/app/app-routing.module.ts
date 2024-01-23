import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RecetaComponent } from './receta/pages/receta/receta.component';
import { DashboardComponent } from './receta/pages/dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'recetas',
    component: RecetaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

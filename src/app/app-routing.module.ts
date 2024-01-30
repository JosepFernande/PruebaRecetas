import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './receta/pages/dashboard/dashboard.component';
import { AddPageComponent } from './receta/pages/add-page/add-page.component';
import { RecetaModule } from './receta/receta.module';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'recetas',
    component: AddPageComponent
  }, {
    path: 'receta',
    loadChildren: () => import('./receta/receta.module').then(m => m.RecetaModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

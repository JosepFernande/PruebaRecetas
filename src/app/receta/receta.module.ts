import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecetaComponent } from './pages/receta/receta.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';




@NgModule({
  declarations: [
    SearchBoxComponent,
    RecetaComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RecetaModule { }

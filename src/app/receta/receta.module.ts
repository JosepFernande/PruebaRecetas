import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { SearchBoxComponent } from './components/search-box/search-box.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { AddPageComponent } from './pages/add-page/add-page.component';
import { AddIngredienteComponent } from './components/add-ingrediente/add-ingrediente.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { ByRecetaIdComponent } from './pages/by-receta-id/by-receta-id.component';
import { RecetaRoutingModule } from './receta-routing.module';




@NgModule({
  declarations: [
    SearchBoxComponent,
    DashboardComponent,
    TableComponent,
    AddPageComponent,
    AddIngredienteComponent,
    ByRecetaIdComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule,
    RecetaRoutingModule
  ]
})
export class RecetaModule { }

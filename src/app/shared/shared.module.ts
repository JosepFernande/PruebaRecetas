import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { AlertDangerComponent } from './components/alert-danger/alert-danger.component';
import { AlertWarningComponent } from './components/alert-warning/alert-warning.component';




@NgModule({
  declarations: [
    ModalComponent,
    SidebarComponent,
    AlertDangerComponent,
    AlertWarningComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ModalComponent,
    SidebarComponent,
    AlertDangerComponent,
    AlertWarningComponent,
  ]
})
export class SharedModule { }

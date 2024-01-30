import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../interfaces/receta.interfaces';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

declare var $: any;

@Component({
  selector: 'receta-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  search: string = ''

  searchByTitle(term: string): void {
    this.search = term
  }

  constructor(private recetaService: RecetaService) {

  }

  get recetas(): Receta[] {
    if (this.search == '') return this.recetaService.recetas

    return this.recetaService.recetas.filter(x => x.title == this.search);
  }


}

import { Component } from '@angular/core';
import { RecetaService } from '../../services/receta.service';
import { Receta } from '../../interfaces/receta.interfaces';

@Component({
  selector: 'receta-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchByCapital(term: string): void {
    console.log(term);

  }

  constructor(private recetaService: RecetaService) { }

  get recetas(): Receta[] {
    return [...this.recetaService.recetas]
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'receta-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  searchByCapital(term: string): void {
    console.log(term);

  }
}

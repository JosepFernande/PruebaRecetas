import { Component, Input } from '@angular/core';
import { Receta } from '../../interfaces/receta.interfaces';

@Component({
  selector: 'recesta-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  @Input()
  public recetaList!: Receta[]
}

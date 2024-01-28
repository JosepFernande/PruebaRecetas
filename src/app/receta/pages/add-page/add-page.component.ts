import { Component, EventEmitter, Output } from '@angular/core';
import { Receta } from '../../interfaces/receta.interfaces';
import { RecetaService } from '../../services/receta.service';
import { Router } from '@angular/router';

@Component({
  selector: 'receta-add-page',
  templateUrl: './add-page.component.html',
  styles: ``
})
export class AddPageComponent {

  constructor(private recetaService: RecetaService, private router: Router) {

  }

  public receta: Receta = {
    id: 0,
    title: '',
    description: '',
    img: ''
  };

  emitReceta(): void {
    if (this.receta.title.length === 0 || this.receta.description.length == 0) return;
    this.recetaService.addReceta(this.receta)
    this.router.navigate([''])


    this.receta = {
      id: 0,
      title: '',
      description: '',
      img: ''
    };
  }
}

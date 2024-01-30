import { Component, OnInit } from '@angular/core';
import { Ingrediente, Receta } from '../../interfaces/receta.interfaces';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { RecetaService } from '../../services/receta.service';

@Component({
  selector: 'app-by-receta-id',
  templateUrl: './by-receta-id.component.html',
  styles: ``
})
export class ByRecetaIdComponent implements OnInit {

  public receta?: Receta;
  public ingredientes?: Ingrediente[];


  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private recetaService: RecetaService
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: ({ id }) => {
        this.receta = this.recetaService.getReceta(id);
        this.ingredientes = this.receta?.ingrediente
        if (!this.receta) this.router.navigateByUrl('');
      }
    })
  }

  isImage(image: string): string {
    if (image == '') {
      return 'assets/food.png';
    }
    return image;
  }

  isChecked(check: Ingrediente) {
    if (check.state) {
      check.state = false
    } else {
      check.state = true
    }

    this.recetaService.updateReceta()
  }
}

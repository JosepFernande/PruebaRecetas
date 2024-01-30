import { Component, ViewChild } from '@angular/core';
import { Ingrediente, Modal, Receta } from '../../interfaces/receta.interfaces';
import { RecetaService } from '../../services/receta.service';
import { Router } from '@angular/router';
import { ModalComponent } from '../../../shared/components/modal/modal.component';

@Component({
  selector: 'receta-add-page',
  templateUrl: './add-page.component.html',
  styles: ``
})
export class AddPageComponent {

  public modalView: Modal = {
    title: '¡Exito!',
    description: 'Receta agregada de manera exitosa',
    actionName: 'Continuar'
  }

  constructor(private recetaService: RecetaService,
    private router: Router) {

  }

  public receta: Receta = {
    id: 0,
    title: '',
    description: '',
    img: '',
    ingrediente: [{ name: '', quantity: 0, state: false }]
  };

  onNewIngrediente(ingrediente: Ingrediente[]): void {
    this.receta.ingrediente = ingrediente
  }

  getImage(image: any) {
    this.receta.img = this.recetaService.setImage(image);
  }

  emitReceta(): void {
    if (this.receta.title.length === 0 || this.receta.description.length == 0) return;

    this.recetaService.addReceta(this.receta)
    this.showModal()
    this.receta = {
      id: 0,
      title: '',
      description: '',
      img: ''
    };
  }

  redirectConfirm(action: boolean) {
    if (action) this.router.navigate([''])
  }

  @ViewChild(ModalComponent)
  modal!: ModalComponent

  showModal() {
    this.modal.openModal()
  }
}

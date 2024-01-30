import { Component, Input, ViewChild } from '@angular/core';
import { Modal, Receta } from '../../interfaces/receta.interfaces';
import { RecetaService } from '../../services/receta.service';
import { ModalComponent } from '../../../shared/components/modal/modal.component';
import { Router } from '@angular/router';

@Component({
  selector: 'recesta-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {

  public modalView: Modal = {
    title: '!Cuidado!',
    description: '¿Desea eliminar permanente esta receta?',
    actionName: 'Confirmar'
  }
  private recetaId: number = 0

  @Input()
  public recetaList!: Receta[]

  constructor(private recetaService: RecetaService,
    private router: Router) {

  }

  onDeleteById(id: number): void {
    this.recetaService.deleteRecetaById(id);
  }

  isImage(image: string): string {
    if (image == '') {
      return 'assets/food.png';
    }
    return image;
  }


  confirm(action: boolean) {
    if (action) this.onDeleteById(this.recetaId);
  }

  @ViewChild(ModalComponent)
  modal!: ModalComponent

  showModal(id: number) {
    this.recetaId = id;
    this.modal.openModal()
  }

}

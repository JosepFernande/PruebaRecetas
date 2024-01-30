import { Component, EventEmitter, Output, Input } from '@angular/core';
import { throwIfEmpty } from 'rxjs';

declare var $: any

@Component({
  selector: 'shared-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {

  @Output()
  action: EventEmitter<boolean> = new EventEmitter();

  @Input()
  public title: string = ''

  @Input()
  public description: string = ''

  @Input()
  public actionName: string = ''

  success() {
    this.closeModal()
    this.action.emit(true);
  }

  openModal(): void {
    $('#modalAlert').modal('show')
  }

  closeModal(): void {
    $('#modalAlert').modal('hide')
  }
}

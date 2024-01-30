import { Component, EventEmitter, Output } from '@angular/core';
import { Ingrediente } from '../../interfaces/receta.interfaces';

@Component({
  selector: 'receta-add-ingrediente',
  templateUrl: './add-ingrediente.component.html',
  styles: ``
})
export class AddIngredienteComponent {

  @Output()
  public onNewIngrediente: EventEmitter<Ingrediente[]> = new EventEmitter();

  public ingredientes: Ingrediente[] = [{
    name: '',
    quantity: 0,
    state: false
  }];


  addIngrediente(): void {
    const ingrediente: Ingrediente = {
      name: '',
      quantity: 0,
      state: false
    }
    this.ingredientes.push(ingrediente);
    this.onNewIngrediente.emit(this.ingredientes);
  }

  revomeIngrediente(): void {
    this.ingredientes.pop();
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'receta-search-box',
  templateUrl: './search-box.component.html',
  styles: ``
})
export class SearchBoxComponent {
  @Input()
  public placeholder: string = '';

  @Output()
  public value: EventEmitter<string> = new EventEmitter();

  emitValue(value?: string): void {
    this.value.emit(value);
  }

}

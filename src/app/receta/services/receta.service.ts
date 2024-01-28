import { Injectable } from '@angular/core';
import { Receta } from '../interfaces/receta.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() {
    this.loadLocalStorage()
  }

  public recetas: Receta[] = [{
    id: 1,
    title: 'Receta1',
    description: 'Descripcion... 1',
    img: 'path/img1',
    ingrediente: [{
      name: 'nombre1',
      quantity: 100,
      state: false
    }, {
      name: 'nombre2',
      quantity: 100,
      state: false
    }]
  }, {
    id: 2,
    title: 'Receta2',
    description: 'Descripcion... 2',
    img: 'path/img2'

  }];

  addReceta(receta: Receta): void {
    receta.id = this.recetas.length + 1
    console.log(receta);
    this.recetas.unshift(receta)
    this.saveLocalStorage()
  }

  private saveLocalStorage(): void {
    console.log(this.recetas);
    localStorage.setItem('recetas', JSON.stringify(this.recetas));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('recetas')) return;

    this.recetas = JSON.parse(localStorage.getItem('recetas')!);
    if (this.recetas.length == 0) return;
  }


  // // onDeleteCharacter(index: number): void {
  // //   this.characters.splice(index, 1);
  // deleteCharacterById(id: string): void {
  //   this.characters = this.characters.filter(character => character.id != id)
}

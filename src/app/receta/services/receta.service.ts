import { Injectable } from '@angular/core';
import { Receta, Ingrediente } from '../interfaces/receta.interfaces';

@Injectable({
  providedIn: 'root'
})
export class RecetaService {

  constructor() {
    this.loadLocalStorage()
  }

  public recetas: Receta[] = [];

  addReceta(receta: Receta): void {
    if (this.recetas.length == 0) {
      this.recetas = [{
        title: receta.title,
        id: 1,
        description: receta.description,
        img: receta.img,
        ingrediente: receta.ingrediente
      }]
      this.saveLocalStorage()
    } else {
      receta.id = this.recetas[0].id + 1
      this.recetas.unshift(receta)
      this.saveLocalStorage()
    }
  }
  updateReceta() {
    this.saveLocalStorage()
  }

  searchRecetaById(id: number): Receta | null {
    const receta: Receta = this.recetas.filter((element) => element.id == id)[0]
    return receta
  }

  private saveLocalStorage(): void {
    localStorage.setItem('recetas', JSON.stringify(this.recetas));
  }

  private loadLocalStorage(): void {
    if (!localStorage.getItem('recetas')) return;

    this.recetas = JSON.parse(localStorage.getItem('recetas')!);
    if (this.recetas.length == 0) return;
  }

  deleteRecetaById(id: number): void {
    this.recetas = this.recetas.filter(receta => receta.id != id);
    this.saveLocalStorage()
    if (this.recetas.length == 0) localStorage.removeItem('recetas');
  }

  setImage(image: any): string {
    return URL.createObjectURL(image.target.files[0])
  }

  getReceta(id: number): Receta | undefined {
    const receta: Receta | undefined = this.recetas.find((element) => element.id == id);
    return receta;
  }

}


export interface Receta {
  id: number,
  title: string;
  description: string;
  img: string;
  ingrediente?: Ingrediente[]
}


export interface Ingrediente {
  name: string;
  state: boolean;
  quantity: number;
}

export interface Modal {
  title: string,
  description: string,
  actionName: string
}

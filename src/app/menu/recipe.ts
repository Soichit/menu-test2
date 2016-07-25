import {Ingredient} from "../shared/ingredient";

export class Recipe {
  constructor(public name: string,
              public price: number,
              public description: string,
              public imagePath: string,
              public ingredients: Ingredient[]
  ) {}
}


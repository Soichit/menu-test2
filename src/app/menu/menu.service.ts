import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {FoodType} from "./food-type-class";

import {Ingredient} from "../shared/ingredient";


@Injectable()
export class MenuService {
    private recipes: Recipe[] = [
        new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
            new Ingredient('French Fries', 2),
            new Ingredient('Pork Meat', 1)
        ]),
        new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    ];

    private foodTypes: FoodType[] = [
        new FoodType('appetizer', ['salad', 'soup', 'biscuits']),
        new FoodType('lunch', ['sandwich', 'hamburger', 'hotdog']),
        new FoodType('dinner', ['steak', 'chicken', 'pork']),
        new FoodType('dessert', ['cake', 'icecream', 'pudding']),
    ];



    constructor() {}

    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }

    getAllTypes() {
        return this.foodTypes;
    }
    
    getFoodType(id: number) {
        return this.foodTypes[id];
    }
}

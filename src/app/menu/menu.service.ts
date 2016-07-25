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
        new FoodType('Appetizers', [
            new Recipe('salad', 'description', 'http://cooking.my.panasonic.com/wp-content/uploads/2016/06/salad.jpg', []),
            new Recipe('soup', 'description', 'http://www.my7daydiet.com/images/wonder-soup.jpg', []),
            new Recipe('fries', 'description', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQogn8pSGg-Omi2P28rGFQMwaZbYpM5qbmYqNskoOKF-ALSo8aJ', [])

        ]),
        new FoodType('Lunch', [
            new Recipe('sandwich', '', '', []),
            new Recipe('hamburger', '', '', []),
            new Recipe('hotdog', '', '', [])
        ]),
        new FoodType('Dinner', [
            new Recipe('steak', '', '', []),
            new Recipe('chicken', '', '', []),
            new Recipe('pork', '', '', [])
        ]),
        new FoodType('Desserts', [
            new Recipe('cake', '', '', []),
            new Recipe('icecream', '', '', []),
            new Recipe('pudding', '', '', [])
        ])
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
    
    getFoodItems(id: number) {
        return this.foodTypes[id];
    }
    
    getFoodItem(id1: number, id2: number) {
        return this.foodTypes[id1][id2];
    }
}

import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";
import {FoodType} from "./food-type-class";

import {Ingredient} from "../shared/ingredient";


@Injectable()
export class MenuService {
    // private recipes: Recipe[] = [
    //     new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
    //         new Ingredient('French Fries', 2),
    //         new Ingredient('Pork Meat', 1)
    //     ]),
    //     new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
    // ];

    private foodTypes: FoodType[] = [
        new FoodType('Appetizers', [
            new Recipe('salad', 5.85, 'description', 'http://cooking.my.panasonic.com/wp-content/uploads/2016/06/salad.jpg', [
                new Ingredient('lettuce', 2),
                new Ingredient('tomatoes', 4),
                new Ingredient('olives', 8)
            ]),
            new Recipe('soup', 3.95, 'description', 'http://www.my7daydiet.com/images/wonder-soup.jpg', []),
            new Recipe('fries', 2.99, 'description', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQogn8pSGg-Omi2P28rGFQMwaZbYpM5qbmYqNskoOKF-ALSo8aJ', [])

        ]),
        new FoodType('Lunch', [
            new Recipe('sandwich', 6.99, '', '', []),
            new Recipe('hamburger', 6.99, '', '', []),
            new Recipe('hotdog', 6.99, '', '', [])
        ]),
        new FoodType('Dinner', [
            new Recipe('steak', 6.99, '', '', []),
            new Recipe('chicken', 6.99, '', '', []),
            new Recipe('pork', 6.99, '', '', [])
        ]),
        new FoodType('Desserts', [
            new Recipe('cake', 6.99, '', '', []),
            new Recipe('ice cream', 6.99, '', '', []),
            new Recipe('pudding', 6.99, '', '', [])
        ])
    ];

    
    constructor() {}
    /*
    getRecipes() {
        return this.recipes;
    }

    getRecipe(id: number) {
        return this.recipes[id];
    }

    deleteRecipe(recipe: Recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    }
    */

    getAllTypes() {
        return this.foodTypes;
    }
    
    getAllFoods(id: number) {
        return this.foodTypes[id];
    }
    
    getFoodItem(id1: number, id2: number) {
        console.log("id1: " + id1 + ", id2: " + id2);
        return this.foodTypes[id1][id2];
    }
}

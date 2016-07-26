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
            new Recipe('salad', 5.85, ' a dish consisting of small pieces of food, which may be mixed with a sauce or salad dressing', 'http://cooking.my.panasonic.com/wp-content/uploads/2016/06/salad.jpg', [
                new Ingredient('lettuce', 2),
                new Ingredient('tomatoes', 4),
                new Ingredient('olives', 8)
            ]),
            new Recipe('soup', 3.95, 'a primarily liquid food, generally served warm that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another', 'http://www.my7daydiet.com/images/wonder-soup.jpg', [
                new Ingredient('garlic', 1),
                new Ingredient('stew', 5)
            ]),
            new Recipe('fries', 2.99, ' batonnet or allumette cut potato that are normally deep-fried but could also be cooked in an oven.', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQogn8pSGg-Omi2P28rGFQMwaZbYpM5qbmYqNskoOKF-ALSo8aJ', [])

        ]),
        new FoodType('Lunch', [
            new Recipe('sandwich', 6.99, 'description', 'http://pngimg.com/upload/burger_sandwich_PNG4150.png', []),
            new Recipe('hamburger', 6.99, 'description', 'http://pngimg.com/upload/burger_sandwich_PNG4114.png', []),
            new Recipe('hotdog', 6.99, 'description', 'http://static.parade.com/wp-content/uploads/2013/07/hot-dog-ftr.jpg', [])
        ]),
        new FoodType('Dinner', [
            new Recipe('steak', 6.99, 'description', 'http://weeklygravy.com/wp-content/uploads/2014/01/steak.jpg', []),
            new Recipe('chicken', 6.99, 'description', 'http://seattle.eat24hours.com/files/cuisines/v4/chicken.jpg', []),
            new Recipe('pork', 6.99, 'description', 'http://images.media-allrecipes.com/images/51219.jpg', [])
        ]),
        new FoodType('Desserts', [
            new Recipe('cake', 6.99, 'description', 'http://crossfit601.com/wp-content/uploads/2015/03/article-0-14FA374C000005DC-973_634x467.jpg', []),
            new Recipe('ice cream', 6.99, 'description', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVSpzRHstdEH1lWs9LtCoWqnIk5nZngD6jaynyTnRdokpgyjC_', []),
            new Recipe('pudding', 6.99, 'description', 'http://img.sndimg.com/food/image/upload/v1/img/recipes/29/19/9/hqWrjoTdRtPbKSb3rwWR_Oreo%20Pudding%202.jpg', [])
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

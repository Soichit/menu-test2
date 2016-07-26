"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var recipe_1 = require("./recipe");
var food_type_class_1 = require("./food-type-class");
var ingredient_1 = require("../shared/ingredient");
var MenuService = (function () {
    function MenuService() {
        // private recipes: Recipe[] = [
        //     new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
        //         new Ingredient('French Fries', 2),
        //         new Ingredient('Pork Meat', 1)
        //     ]),
        //     new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
        // ];
        this.foodTypes = [
            new food_type_class_1.FoodType('Appetizers', [
                new recipe_1.Recipe('salad', 5.85, ' a dish consisting of small pieces of food, which may be mixed with a sauce or salad dressing', 'http://cooking.my.panasonic.com/wp-content/uploads/2016/06/salad.jpg', [
                    new ingredient_1.Ingredient('lettuce', 2),
                    new ingredient_1.Ingredient('tomatoes', 4),
                    new ingredient_1.Ingredient('olives', 8)
                ]),
                new recipe_1.Recipe('soup', 3.95, 'a primarily liquid food, generally served warm that is made by combining ingredients such as meat and vegetables with stock, juice, water, or another', 'http://www.my7daydiet.com/images/wonder-soup.jpg', [
                    new ingredient_1.Ingredient('garlic', 1),
                    new ingredient_1.Ingredient('stew', 5)
                ]),
                new recipe_1.Recipe('fries', 2.99, ' batonnet or allumette cut potato that are normally deep-fried but could also be cooked in an oven.', 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQogn8pSGg-Omi2P28rGFQMwaZbYpM5qbmYqNskoOKF-ALSo8aJ', [])
            ]),
            new food_type_class_1.FoodType('Lunch', [
                new recipe_1.Recipe('sandwich', 6.99, 'description', 'http://pngimg.com/upload/burger_sandwich_PNG4150.png', []),
                new recipe_1.Recipe('hamburger', 6.99, 'description', 'http://pngimg.com/upload/burger_sandwich_PNG4114.png', []),
                new recipe_1.Recipe('hotdog', 6.99, 'description', 'http://static.parade.com/wp-content/uploads/2013/07/hot-dog-ftr.jpg', [])
            ]),
            new food_type_class_1.FoodType('Dinner', [
                new recipe_1.Recipe('steak', 6.99, 'description', 'http://weeklygravy.com/wp-content/uploads/2014/01/steak.jpg', []),
                new recipe_1.Recipe('chicken', 6.99, 'description', 'http://seattle.eat24hours.com/files/cuisines/v4/chicken.jpg', []),
                new recipe_1.Recipe('pork', 6.99, 'description', 'http://images.media-allrecipes.com/images/51219.jpg', [])
            ]),
            new food_type_class_1.FoodType('Desserts', [
                new recipe_1.Recipe('cake', 6.99, 'description', 'http://crossfit601.com/wp-content/uploads/2015/03/article-0-14FA374C000005DC-973_634x467.jpg', []),
                new recipe_1.Recipe('ice cream', 6.99, 'description', 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTVSpzRHstdEH1lWs9LtCoWqnIk5nZngD6jaynyTnRdokpgyjC_', []),
                new recipe_1.Recipe('pudding', 6.99, 'description', 'http://img.sndimg.com/food/image/upload/v1/img/recipes/29/19/9/hqWrjoTdRtPbKSb3rwWR_Oreo%20Pudding%202.jpg', [])
            ])
        ];
    }
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
    MenuService.prototype.getAllTypes = function () {
        return this.foodTypes;
    };
    MenuService.prototype.getAllFoods = function (id) {
        return this.foodTypes[id];
    };
    MenuService.prototype.getFoodItem = function (id1, id2) {
        console.log("id1: " + id1 + ", id2: " + id2);
        return this.foodTypes[id1][id2];
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map
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
var food_type_1 = require("./food-type");
var ingredient_1 = require("../shared/ingredient");
var MenuService = (function () {
    function MenuService() {
        this.recipes = [
            new recipe_1.Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', [
                new ingredient_1.Ingredient('French Fries', 2),
                new ingredient_1.Ingredient('Pork Meat', 1)
            ]),
            new recipe_1.Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
        ];
        this.foodtypes = [
            new food_type_1.FoodType('appetizer', ['salad', 'soup', 'biscuits']),
            new food_type_1.FoodType('lunch', ['sandwich', 'hamburger', 'hotdog']),
            new food_type_1.FoodType('dinner', ['steak', 'chicken', 'pork']),
            new food_type_1.FoodType('dessert', ['cake', 'icecream', 'pudding']),
        ];
    }
    MenuService.prototype.getRecipes = function () {
        return this.recipes;
    };
    MenuService.prototype.getRecipe = function (id) {
        return this.recipes[id];
    };
    MenuService.prototype.deleteRecipe = function (recipe) {
        this.recipes.splice(this.recipes.indexOf(recipe), 1);
    };
    MenuService.prototype.getAllTypes = function () {
        return this.foodtypes;
    };
    MenuService.prototype.getFoodType = function (id) {
        return this.foodtypes[id];
    };
    MenuService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], MenuService);
    return MenuService;
}());
exports.MenuService = MenuService;
//# sourceMappingURL=menu.service.js.map
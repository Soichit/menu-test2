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
var router_1 = require("@angular/router");
var menu_service_1 = require("../menu.service");
var recipe_item_component_1 = require("./recipe-item.component");
var FoodItemsListComponent = (function () {
    function FoodItemsListComponent(route, menuService) {
        this.route = route;
        this.menuService = menuService;
        this.typeIndex = 1;
    }
    FoodItemsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscription = this.route.params.subscribe(function (params) {
            _this.typeIndex = params['id'];
            _this.selectedType = _this.menuService.getAllFoods(_this.typeIndex);
            _this.selectedFood = undefined;
            console.log(_this.selectedFood);
        });
    };
    FoodItemsListComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    FoodItemsListComponent.prototype.onClick = function () {
        //console.log(this.selectedFood);
    };
    FoodItemsListComponent.prototype.onEdit = function () {
    };
    FoodItemsListComponent.prototype.onDelete = function () {
    };
    FoodItemsListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'food-items-list',
            templateUrl: 'food-items-list.component.html',
            directives: [recipe_item_component_1.RecipeItemComponent]
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, menu_service_1.MenuService])
    ], FoodItemsListComponent);
    return FoodItemsListComponent;
}());
exports.FoodItemsListComponent = FoodItemsListComponent;
//# sourceMappingURL=food-items-list.component.js.map
import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import {Recipe} from "../recipe";
import {FoodType} from "../food-type";

import {MenuService} from "../menu.service";
import { FoodTypeComponent } from './food-type.component';



@Component({
  moduleId: module.id,
  selector: 'food-types-list',
  templateUrl: 'food-types-list.component.html',
  directives: [FoodTypeComponent, ROUTER_DIRECTIVES]
})

export class FoodTypesListComponent implements OnInit {
  recipes: Recipe[] = [];
  foodTypes: FoodType[] = [];

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    console.log("testing if logs");
    this.recipes = this.menuService.getRecipes();
    this.foodTypes = this.menuService.getAllTypes();
    console.log(this.foodTypes);
  }
}
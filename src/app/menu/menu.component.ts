import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {FoodTypesListComponent} from "./food-types-list/food-types-list.component";


@Component({
  moduleId: module.id,
  selector: 'rb-menu',
  templateUrl: 'menu.component.html',
  directives: [FoodTypesListComponent, ROUTER_DIRECTIVES]
})
export class MenuComponent implements OnInit {

  constructor() {}

  ngOnInit() {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {Recipe} from "../recipe";
import {FoodType} from "../food-type";
import {ROUTER_DIRECTIVES} from "@angular/router";




@Component({
  moduleId: module.id,
  selector: 'food-type',
  templateUrl: 'food-type.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class FoodTypeComponent implements OnInit {
  //@Input() recipe: Recipe;
  @Input() foodType: FoodType;
  @Input() typeId: number;

  ngOnInit() {
  }
}

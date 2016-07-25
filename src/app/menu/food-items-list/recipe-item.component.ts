
import {Component, Input, Output, EventEmitter, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute, Router} from "@angular/router";
import {Recipe} from "../recipe";


@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() foodIndex: number;
  //@Input() typeIndex: number;
  //selectedFood: Recipe;
  @Output() foodSelected = new EventEmitter<Recipe>();

  
  ngOnInit() {
    //console.log(this.recipe);
  }

  onSelected(index: number) {
    //console.log("selectedIndex: " + index);
    //console.log(this.recipe);
    this.foodSelected.emit(this.recipe);
  }
}



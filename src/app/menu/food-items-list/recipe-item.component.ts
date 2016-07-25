
import {Component, Input, OnInit, OnDestroy} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {MenuService} from "../menu.service";
import {Recipe} from "../recipe";


@Component({
  moduleId: module.id,
  selector: 'rb-recipe-item',
  templateUrl: 'recipe-item.component.html',
  directives: [ROUTER_DIRECTIVES]
})
export class RecipeItemComponent implements {
  @Input() recipe: Recipe, recipeId: number;


  /*
  selectedFood: Recipe;
  //private foodIndex: number = 1;
  private subscription: Subscription;

  
  constructor(private route: ActivatedRoute,
              private menuService: MenuService) {}

  ngOnInit() {
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSelected() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          //this.foodIndex = params['id1', 'id2'];
          this.selectedFood = this.menuService.getFoodItem(params['id1'], params['id2']);
        }
    )
  }
  */
}



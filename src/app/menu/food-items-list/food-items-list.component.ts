import {Component, OnInit, OnDestroy} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Rx";
import {FoodType} from "../food-type-class";
import {MenuService} from "../menu.service";
import {RecipeItemComponent} from "./recipe-item.component";
import {Recipe} from "../recipe";


@Component({
  moduleId: module.id,
  selector: 'food-items-list',
  templateUrl: 'food-items-list.component.html',
  directives: [RecipeItemComponent]
})
export class FoodItemsListComponent implements OnInit, OnDestroy {
  selectedType: FoodType;
  
  private typeIndex: number = 1;
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private menuService: MenuService) {}

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
        (params: any) => {
          this.typeIndex = params['id'];
          this.selectedType = this.menuService.getFoodItems(this.typeIndex);
        }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

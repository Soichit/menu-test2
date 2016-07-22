import {RouterConfig} from "@angular/router";
import {MenuStartComponent} from "./menu-start.component";
import {FoodItemsListComponent} from "./food-items-list/food-items-list.component";


export const MENU_ROUTES: RouterConfig = [
    { path: '', component: MenuStartComponent },
    { path: ':id', component: FoodItemsListComponent }
];

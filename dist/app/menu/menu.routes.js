"use strict";
var menu_start_component_1 = require("./menu-start.component");
var food_items_list_component_1 = require("./food-items-list/food-items-list.component");
exports.MENU_ROUTES = [
    { path: '', component: menu_start_component_1.MenuStartComponent },
    { path: ':id', component: food_items_list_component_1.FoodItemsListComponent }
];
//# sourceMappingURL=menu.routes.js.map
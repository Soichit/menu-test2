"use strict";
var router_1 = require("@angular/router");
var menu_component_1 = require("./menu/menu.component");
var menu_routes_1 = require("./menu/menu.routes");
exports.APP_ROUTES_PROVIDERS = [
    router_1.provideRouter([
        { path: '', redirectTo: '/menu', pathMatch: 'full' },
        { path: 'menu', component: menu_component_1.MenuComponent, children: menu_routes_1.MENU_ROUTES }
    ])
];
//# sourceMappingURL=app.routes.js.map
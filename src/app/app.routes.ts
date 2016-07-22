import {provideRouter} from "@angular/router";
import {MenuComponent} from "./menu/menu.component";
import {MENU_ROUTES} from "./menu/menu.routes";


export const APP_ROUTES_PROVIDERS = [
  provideRouter([
    { path: '', redirectTo: '/menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent, children: MENU_ROUTES }
  ])
];

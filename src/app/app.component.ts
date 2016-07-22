import { Component } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";

import {HeaderComponent} from "./header.component";
import {MenuService} from "./menu/menu.service";



@Component({
  moduleId: module.id,
  selector: 'rb-root',
  templateUrl: 'app.component.html',
  directives: [HeaderComponent, ROUTER_DIRECTIVES],
  providers: [MenuService]
})
export class AppComponent {
  title = 'app works!';
}

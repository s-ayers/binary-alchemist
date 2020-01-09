import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  url: string;

  constructor(private router: Router, private location: Location) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  active(path: string, tag: string = 'i') {
    if (this.url === path || (this.url === '/' && path === '/profile')) {
      if (tag !== 'li') {
        return ' icon_menu_active';
      }

      return 'resp-tab-active';
    }
  }

  isActive(routestring: string) {
    return this.location.path() === routestring;
  }

  go(routestring) {
    this.location.go(routestring);
  }

}

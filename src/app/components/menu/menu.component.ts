import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  url: string;

  constructor(private router: Router) {
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
}

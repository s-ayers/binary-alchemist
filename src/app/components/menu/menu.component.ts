import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  url: string;
  primary: any[];

  constructor(private router: Router, private location: Location, private menuService: MenuService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.url;
      }
    });
  }

  ngOnInit(): void {
    this.menuService.primary$.subscribe(menus => {
      this.primary = menus;
    });
  }

  active(path: string, tag = 'i'): string {
    if (this.url === path || (this.url === '/' && path === '/profile')) {
      if (tag !== 'li') {
        return ' icon_menu_active';
      }

      return 'resp-tab-active';
    }
  }

  isActive(routestring: string): boolean {
    return this.location.path() === routestring;
  }

  go(routestring): void {
    this.router.navigateByUrl(routestring);
  }

}

import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { MenuService } from 'src/app/services/menu.service';

declare var $: any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  providers: [MenuService]
})
export class PageComponent  {
  routestring: string;
  collapsed = false;
  constructor(protected location: Location, protected menuService: MenuService) {

  }

  isActive(): boolean {
    return this.location.path() === this.routestring;
  }

  toggle(): void {

    if (!this.isActive()) {
      this.collapsed = false;
      this.go();
    } else {
      this.collapsed = !this.collapsed;
    }
    if (!this.collapsed) {
      setTimeout(() => {
        $('html, body').animate({ scrollTop: $('h2.resp-accordion.resp-tab-active').offset().top - 10 }, 600);
      });

    } else {
      $('html, body').animate({ scrollTop: 0 }, 600);

    }
  }

  go(): void {
    this.location.go(this.routestring);
  }

}

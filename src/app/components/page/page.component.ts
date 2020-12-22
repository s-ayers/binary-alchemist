import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Location } from '@angular/common';
import { MenuService } from 'src/app/services/menu.service';

declare var $: any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [MalihuScrollbarService, MenuService]
})
export class PageComponent implements AfterViewInit, OnDestroy {
  routestring: string;
  collapsed = false;
  constructor(protected mScrollbarService: MalihuScrollbarService, protected location: Location, protected menuService: MenuService) {

  }

  isActive() {
    return this.location.path() === this.routestring;
  }

  toggle() {

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

  go() {
    this.location.go(this.routestring);
  }

  ngAfterViewInit() {
    this.mScrollbarService.initScrollbar('.content_2', {
      theme: 'dark-2',
      contentTouchScroll: true,
      advanced: {
        updateOnContentResize: true,
        updateOnBrowserResize: true,
        autoScrollOnFocus: false
      }
    });
    if (window.innerWidth <= 800) {
      $('html, body').animate({ scrollTop: $('h2.resp-accordion').offset().top - 10 }, 600);

    }
  }
  ngOnDestroy() {
    this.mScrollbarService.destroy('.content_2');
  }
}

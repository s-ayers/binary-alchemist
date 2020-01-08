import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css'],
  providers: [MalihuScrollbarService]
})
export class PageComponent implements AfterViewInit, OnDestroy {
  constructor(private mScrollbarService: MalihuScrollbarService) {}
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
  }
  ngOnDestroy() {
    this.mScrollbarService.destroy('.content_2');
  }
}

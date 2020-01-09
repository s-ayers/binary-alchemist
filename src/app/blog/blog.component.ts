import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends PageComponent {
  routestring = '/blog';

  constructor(mScrollbarService: MalihuScrollbarService, location: Location) {
    super(mScrollbarService, location);
  }
}

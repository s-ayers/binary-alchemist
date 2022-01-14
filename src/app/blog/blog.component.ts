import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent extends PageComponent {
  routestring = '/blog';

  constructor(location: Location, menuService: MenuService) {
    super(location, menuService);
  }
}

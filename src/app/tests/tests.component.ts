import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent extends PageComponent {
  routestring = '/tests';

  constructor(location: Location, menuService: MenuService) {
    super(location, menuService);
  }


}

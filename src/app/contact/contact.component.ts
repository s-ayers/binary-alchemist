import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import * as person from '../app.json';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [MalihuScrollbarService]
})
export class ContactComponent extends PageComponent {
  routestring = '/contact';
  public locationString: string = person.location;
  public website: string = person.website;

  constructor(mScrollbarService: MalihuScrollbarService, location: Location, menuService: MenuService) {
    super(mScrollbarService, location, menuService);
  }
}

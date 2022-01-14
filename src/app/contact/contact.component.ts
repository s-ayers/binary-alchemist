import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { person } from '../app';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: []
})
export class ContactComponent extends PageComponent {
  routestring = '/contact';
  public locationString: string = person.location;
  public website: string = person.website;

  constructor(location: Location, menuService: MenuService) {
    super(location, menuService);
  }
}

import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { person } from '../app';

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

}

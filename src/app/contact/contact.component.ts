import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import * as person from '../app.json';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent extends PageComponent {
  public location: string = person.location;
  public website: string = person.website;
}

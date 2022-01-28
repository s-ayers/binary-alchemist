import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { person } from '../app';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [],
})
export class ProfileComponent extends PageComponent {
  public name: string = person.name;
  public locationString: string = person.location;
  public website: string = person.website;
  routestring = '/profile';

}

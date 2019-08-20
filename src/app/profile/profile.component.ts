import { Component, OnInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import * as person from '../app.json';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent extends PageComponent {
  public name: string = person.name;
  public location: string = person.location;
  public website: string = person.website;
}

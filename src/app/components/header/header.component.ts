import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  name: string = person.name;
  title: string = person.title;
  location: string = person.location;

  constructor() {}

  ngOnInit() {}
}

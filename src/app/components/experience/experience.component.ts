import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any[];
  constructor() {}

  ngOnInit() {
    this.experience = person.experience;
  }
}

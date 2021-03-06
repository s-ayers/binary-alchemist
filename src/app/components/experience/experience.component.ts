import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experience: any[];
  years: number;
  constructor() {}

  ngOnInit() {
    this.experience = person.experience;

    let first = (new Date()).getFullYear();
    this.experience.forEach(element => {
      // console.log(element);
      if (element.start < first) {
        first = element.start;
      }
    });

    this.years = (new Date()).getFullYear() - first;
  }
}

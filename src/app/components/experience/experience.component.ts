import { Component, OnInit } from '@angular/core';
import  { person } from '../../app';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  experience: any[];
  years: number;

  ngOnInit(): void {
    this.experience = person.experience;

    let first = (new Date()).getFullYear();
    this.experience.forEach(element => {
      if (element.start < first) {
        first = element.start;
      }
    });

    this.years = (new Date()).getFullYear() - first;
  }
}

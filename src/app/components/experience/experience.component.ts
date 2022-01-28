import { Component, OnInit } from '@angular/core';
import { Experience } from 'src/app/classes/experience';
import  { person } from '../../app';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
})
export class ExperienceComponent implements OnInit {
  experience: Experience[];
  years: number;

  ngOnInit(): void {
    this.experience = person.experience as Experience[];

    let first = (new Date()).getFullYear();
    this.experience.forEach(element => {
      if (element.start < first) {
        first = element.start;
      }
    });

    this.years = (new Date()).getFullYear() - first;
  }
}

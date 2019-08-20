import { Component, OnInit } from '@angular/core';
import * as person from '../../app.json';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  education: any;
  constructor() {}

  ngOnInit() {}
}

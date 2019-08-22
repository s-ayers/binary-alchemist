import { Component, OnInit, Input } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-project-website',
  templateUrl: './project-website.component.html',
  styleUrls: ['./project-website.component.css']
})
export class ProjectWebsiteComponent implements OnInit {
  @Input() project: any;
  constructor() {}

  ngOnInit() {
    if (this.project.thumbnail) {
      this.project.thumbnail = require('../' + this.project.thumbnail);
    } else {
      this.project.thumbnail = '/assets/images/220x165.png';
    }
  }
}

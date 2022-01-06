import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input() project: Project;
  constructor() {}

  ngOnInit() {
    // console.log(this.project);
  }
}

import { Component } from '@angular/core';

import { PageComponent } from '../components/page/page.component';
import { Project } from '../components/projects/project.model';
import { Projects } from '../components/projects/projects.data';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: []
})
export class PortfolioComponent extends PageComponent {
  routestring = '/portfolio';
  categories: string[] = [];
  projects: Project[] = Projects;
  constructor(location: Location, menuService: MenuService) {
    super(location, menuService);

    this.projects.forEach(project => {
      if (this.categories.indexOf(project.category) === -1) {
        this.categories.push(project.category);
      }
    });

    this.categories.sort();
  }

}

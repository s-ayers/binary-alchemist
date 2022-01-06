import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import mixitup from 'mixitup';

import { PageComponent } from '../components/page/page.component';
import { Project } from '../components/projects/project.model';
import { Projects } from '../components/projects/projects.data';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [MalihuScrollbarService]
})
export class PortfolioComponent extends PageComponent implements AfterViewInit, OnInit {
  routestring = '/portfolio';
  categories: string[] = [];
  projects: Project[] = Projects;
  constructor(mScrollbarService: MalihuScrollbarService, location: Location, menuService: MenuService) {
    super(mScrollbarService, location, menuService);

    this.projects.forEach(project => {
      if (this.categories.indexOf(project.category) === -1) {
        this.categories.push(project.category);
      }
    });

    this.categories.sort();
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    super.ngAfterViewInit();

  }
}

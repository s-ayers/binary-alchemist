import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent extends PageComponent {
  routestring = '/resume';

  constructor(location: Location, menuService: MenuService) {
    super(location, menuService);
  }
}

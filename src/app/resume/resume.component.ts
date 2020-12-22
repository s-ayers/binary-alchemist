import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { Location } from '@angular/common';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent extends PageComponent {
  routestring = '/resume';

  constructor(mScrollbarService: MalihuScrollbarService, location: Location, menuService: MenuService) {
    super(mScrollbarService, location, menuService);
  }
}

import { Component } from '@angular/core';
import { PageComponent } from '../components/page/page.component';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent extends PageComponent {
  routestring = '/tests';

}

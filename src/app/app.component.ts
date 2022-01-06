import { Component, OnInit } from '@angular/core';
import { ThemingService } from './services/theming.service';
import { Router, NavigationEnd } from '@angular/router';
import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Steven Ayers is the Binary Alchemist';
  protected animationStyle = 'bounceIn';


  constructor(private themingService: ThemingService, private router: Router, private menuService: MenuService) {

    menuService.add('/profile', 'fa-user');
    menuService.add('/resume', 'fa-tasks');
    // menuService.add('/portfolio', 'fa-briefcase');

  }

  ngOnInit() {
    this.themingService.Load('');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }

      const animationStyle = 'bounceIn';
      $('.resp-tabs-container').addClass('animated ' + animationStyle);
      $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', () => {
        $('.resp-tabs-container').removeClass('animated ' + animationStyle);
      });
    });


  }

}

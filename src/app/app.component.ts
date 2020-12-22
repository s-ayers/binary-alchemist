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
  }

  ngOnInit() {
    this.themingService.Load('');
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }

      const animation_style = 'bounceIn';
      $('.resp-tabs-container').addClass('animated ' + animation_style);
      $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          $('.resp-tabs-container').removeClass('animated ' + animation_style);
      });
  });


  // const animation_style = 'bounceIn';

  // $('ul.menu-primary li,ul.menu-secondary li').click( () => {

  //     $('.resp-tabs-container').addClass('animated ' + animation_style);
  //     $('.resp-tabs-container').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
  //         $('.resp-tabs-container').removeClass('animated ' + animation_style);
  //     });
  // });

  }
}

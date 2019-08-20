import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import { filter } from 'rxjs/operators';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Binary Alchemist';
  protected animationStyle = 'bounceIn';

  constructor(private router: Router) {
    router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.loadContent();
      });
  }
  public isProduction() {
    return window.location.hostname === 'localhost';
  }
  protected loadContent() {
    $('.resp-tabs-container').addClass('animated ' + this.animationStyle);
    $('.resp-tabs-container').one(
      'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
      function() {
        $('.resp-tabs-container').removeClass(
          'animated ' + this.animationStyle
        );
      }
    );

    /* ---------------------------------------------------------------------- */
    /* ---------------------- redimensionnement ----------------------------- */
    /* ---------------------------------------------------------------------- */

    function redimensionnement() {
      if (window.matchMedia('(max-width: 800px)').matches) {
        $('.content_2').mCustomScrollbar('destroy');
        $('.resp-vtabs .resp-tabs-container').css('height', '100%');
        $('.content_2').css('height', '100%');
      } else {
        $('.resp-vtabs .resp-tabs-container').css('height', '580px');
        $('.content_2').css('height', '580px');
        $('.content_2').mCustomScrollbar('destroy');
        $('.content_2').mCustomScrollbar({
          theme: 'dark-2',
          contentTouchScroll: true,
          advanced: {
            updateOnContentResize: true,
            updateOnBrowserResize: true,
            autoScrollOnFocus: false
          }
        });
      }
    }

    window.addEventListener('load', redimensionnement, false);
    window.addEventListener('resize', redimensionnement, false);
    redimensionnement();
    /* ---------------------------------------------------------------------- */
    /* --------------------------- Scroll tabs ------------------------------ */
    /* ---------------------------------------------------------------------- */

    $('.content_2').mCustomScrollbar({
      theme: 'dark-2',
      contentTouchScroll: true,
      advanced: {
        updateOnContentResize: true,
        updateOnBrowserResize: true,
        autoScrollOnFocus: false
      }
    });
  }
}

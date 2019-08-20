import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent {
  protected animation_style = 'bounceIn';
  // ngOnInit() {
  //   $('.resp-tabs-container').addClass('animated ' + this.animation_style);
  //   $('.resp-tabs-container').one(
  //     'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  //     function() {
  //       $('.resp-tabs-container').removeClass(
  //         'animated ' + this.animation_style
  //       );
  //     }
  //   );

  //   /* ---------------------------------------------------------------------- */
  //   /* ---------------------- redimensionnement ----------------------------- */
  //   /* ---------------------------------------------------------------------- */

  //   function redimensionnement() {
  //     if (window.matchMedia('(max-width: 800px)').matches) {
  //       $('.content_2').mCustomScrollbar('destroy');
  //       $('.resp-vtabs .resp-tabs-container').css('height', '100%');
  //       $('.content_2').css('height', '100%');
  //     } else {
  //       $('.resp-vtabs .resp-tabs-container').css('height', '580px');
  //       $('.content_2').css('height', '580px');
  //       $('.content_2').mCustomScrollbar('destroy');
  //       $('.content_2').mCustomScrollbar({
  //         theme: 'dark-2',
  //         contentTouchScroll: true,
  //         advanced: {
  //           updateOnContentResize: true,
  //           updateOnBrowserResize: true,
  //           autoScrollOnFocus: false
  //         }
  //       });
  //     }
  //   }

  //   window.addEventListener('load', redimensionnement, false);
  //   window.addEventListener('resize', redimensionnement, false);
  //   redimensionnement();
  //   /* ---------------------------------------------------------------------- */
  //   /* --------------------------- Scroll tabs ------------------------------ */
  //   /* ---------------------------------------------------------------------- */

  //   $('.content_2').mCustomScrollbar({
  //     theme: 'dark-2',
  //     contentTouchScroll: true,
  //     advanced: {
  //       updateOnContentResize: true,
  //       updateOnBrowserResize: true,
  //       autoScrollOnFocus: false
  //     }
  //   });
  // }
}

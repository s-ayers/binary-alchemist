import { Component, AfterViewInit } from '@angular/core';
import { PageComponent } from '../components/page/page.component';

declare var $: any;

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent extends PageComponent implements AfterViewInit {
  ngAfterViewInit() {
    // super.ngOnInit();
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Portfolio ------------------------------ */
    /* ---------------------------------------------------------------------- */

    const filterList = {
      init: () => {
        // MixItUp plugin
        // http://mixitup.io
        $('#portfoliolist').mixitup({
          targetSelector: '.portfolio',
          filterSelector: '.filter',
          effects: ['fade'],
          easing: 'snap',
          // call the hover effect
          onMixEnd: filterList.hoverEffect()
        });
      },
      hoverEffect: () => {
        // Simple parallax effect
        $('#portfoliolist .portfolio').hover(
          () => {
            $(this)
              .find('.label')
              .stop()
              .animate({ bottom: 0 }, 200);
            $(this)
              .find('img')
              .stop()
              .animate({ top: -30 }, 500);
          },
          function() {
            $(this)
              .find('.label')
              .stop()
              .animate({ bottom: -40 }, 200);
            $(this)
              .find('img')
              .stop()
              .animate({ top: 0 }, 300);
          }
        );
      }
    };

    // Run the show!
    filterList.init();
  }
}

import { Component, AfterViewInit } from '@angular/core';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import mixitup from 'mixitup';

import { PageComponent } from '../components/page/page.component';
import { Project } from '../components/projects/project.model';
import { Projects } from '../components/projects/projects.data';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
  providers: [MalihuScrollbarService]
})
export class PortfolioComponent extends PageComponent implements AfterViewInit {
  categories: string[] = [];
  projects: Project[] = Projects;
  constructor(mScrollbarService: MalihuScrollbarService) {
    super(mScrollbarService);
    this.projects.forEach(project => {
      if (this.categories.indexOf(project.category) === -1) {
        this.categories.push(project.category);
      }
    });

    this.categories.sort();
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    /* ---------------------------------------------------------------------- */
    /* ----------------------------- Portfolio ------------------------------ */
    /* ---------------------------------------------------------------------- */
    const filterList = {
      init: () => {
        // MixItUp plugin
        // http://mixitup.io
        mixitup('#portfoliolist', {
          // targetSelector: '.portfolio',
          // filterSelector: '.filter',
          // effects: ['fade'],
          // easing: 'snap',
          // // call the hover effect
          // onMixEnd: filterList.hoverEffect()
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

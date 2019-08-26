import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { PortfolioComponent } from './portfolio.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { ProjectWebsiteComponent } from '../components/projects/project-website/project-website.component';
import * as projects from '../components/projects/projects.json';
import { Project } from '../components/projects/project.model';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        PortfolioComponent,
        ProjectsComponent,
        ProjectWebsiteComponent,
        EscapeHtmlPipe
      ],
      providers: [MalihuScrollbarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    component.projects = projects as Project[];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

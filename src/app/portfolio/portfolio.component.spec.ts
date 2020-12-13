import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';

import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { PortfolioComponent } from './portfolio.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { Projects } from '../components/projects/projects.data';

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent, ProjectsComponent, EscapeHtmlPipe],
      providers: [MalihuScrollbarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioComponent);
    component = fixture.componentInstance;
    component.projects = Projects;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

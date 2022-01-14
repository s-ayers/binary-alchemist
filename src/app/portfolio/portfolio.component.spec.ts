import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';

import { PortfolioComponent } from './portfolio.component';
import { ProjectsComponent } from '../components/projects/projects.component';
import { Projects } from '../components/projects/projects.data';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
  selector: 'ng-scrollbar',
  template: ''
})
class MockScrollbarComponent {
}

describe('PortfolioComponent', () => {
  let component: PortfolioComponent;
  let fixture: ComponentFixture<PortfolioComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioComponent, ProjectsComponent, EscapeHtmlPipe, MockScrollbarComponent],
      providers: []
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

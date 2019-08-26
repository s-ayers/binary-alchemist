import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebsiteComponent } from './project-website.component';
import { EscapeHtmlPipe } from '../../../pipes/keep-html.pipe';
// import { } from '../';
import * as projects from '../projects.json';

describe('ProjectWebsiteComponent', () => {
  let component: ProjectWebsiteComponent;
  let fixture: ComponentFixture<ProjectWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWebsiteComponent, EscapeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWebsiteComponent);
    component = fixture.componentInstance;
    component.project = require('../projects.json')[0]; // projects[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';

import { ProjectsComponent } from './projects.component';
import { Project } from './project.model';
import { ProjectWebsiteComponent } from './project-website/project-website.component';
import * as projects from './projects.json';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, ProjectWebsiteComponent, EscapeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    const project = projects[0] as Project;
    // console.log(project);
    project.thumbnail = ''; ///require(project.thumbnail);
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

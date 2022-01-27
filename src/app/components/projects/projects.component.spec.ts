import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';

import { ProjectsComponent } from './projects.component';
import { Projects } from './projects.data';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsComponent, EscapeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    const project = Projects[0];
    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    component.project = project;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

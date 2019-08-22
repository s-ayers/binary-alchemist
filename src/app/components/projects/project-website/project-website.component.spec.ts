import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWebsiteComponent } from './project-website.component';

describe('ProjectWebsiteComponent', () => {
  let component: ProjectWebsiteComponent;
  let fixture: ComponentFixture<ProjectWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

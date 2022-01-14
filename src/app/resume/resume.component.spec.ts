import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { EducationComponent } from '../components/education/education.component';
import { AwardsComponent } from '../components/awards/awards.component';
import { ReferenceComponent } from '../components/reference/reference.component';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { SkillsComponent } from '../skills/skills.component';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
  selector: 'ng-scrollbar',
  template: ''
})
class MockScrollbarComponent {
}


describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResumeComponent,
        ExperienceComponent,
        EducationComponent,
        AwardsComponent,
        ReferenceComponent,
        SkillsComponent,
        MockScrollbarComponent,
        ReferenceComponent,
        AwardsComponent,
        EscapeHtmlPipe
      ],
      providers: [],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

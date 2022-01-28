import { Component } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { AwardsComponent } from '../components/awards/awards.component';
import { EducationComponent } from '../components/education/education.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { ReferenceComponent } from '../components/reference/reference.component';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { ProfileComponent } from '../profile/profile.component';
import { ResumeComponent } from '../resume/resume.component';
import { SettingsComponent } from '../settings/settings.component';
import { SkillsComponent } from '../skills/skills.component';
import { TestsComponent } from '../tests/tests.component';

import { HomeComponent } from './home.component';

@Component({
    // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ng-scrollbar',
  template: ''
})
class MockScrollbarComponent {
}

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        AwardsComponent,
        EducationComponent,
        ExperienceComponent,
        HomeComponent,
        MockScrollbarComponent,
        ProfileComponent,
        ReferenceComponent,
        ResumeComponent,
        ResumeComponent,
        SettingsComponent,
        SkillsComponent,
        EscapeHtmlPipe,
        TestsComponent,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

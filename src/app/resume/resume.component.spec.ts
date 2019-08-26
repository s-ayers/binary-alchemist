import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeComponent } from './resume.component';
import { ExperienceComponent } from '../components/experience/experience.component';
import { EducationComponent } from '../components/education/education.component';
import { AwardsComponent } from '../components/awards/awards.component';
import { ReferenceComponent } from '../components/reference/reference.component';
import { EscapeHtmlPipe } from '../pipes/keep-html.pipe';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

describe('ResumeComponent', () => {
  let component: ResumeComponent;
  let fixture: ComponentFixture<ResumeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ResumeComponent,
        ExperienceComponent,
        EducationComponent,
        AwardsComponent,
        ReferenceComponent,
        EscapeHtmlPipe
      ],
      providers: [MalihuScrollbarService]
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

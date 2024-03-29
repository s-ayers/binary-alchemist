import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceComponent } from './experience.component';
import { EscapeHtmlPipe } from '../../pipes/keep-html.pipe';

describe('ExperienceComponent', () => {
  let component: ExperienceComponent;
  let fixture: ComponentFixture<ExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceComponent, EscapeHtmlPipe]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

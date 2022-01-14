import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';
import { Component } from '@angular/core';

@Component({
    // tslint:disable-next-line:component-selector
  selector: 'ng-scrollbar',
  template: ''
})
class MockScrollbarComponent {
}

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, SocialMediaComponent, MockScrollbarComponent],
      providers: []
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

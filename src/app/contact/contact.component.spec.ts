import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { SocialMediaComponent } from '../components/social-media/social-media.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent, SocialMediaComponent],
      providers: [MalihuScrollbarService]
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

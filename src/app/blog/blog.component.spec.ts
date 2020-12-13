import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BlogComponent],
      providers: [MalihuScrollbarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

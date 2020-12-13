import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import jQuery from 'jquery';
import { PageComponent } from './page.component';
import { MalihuScrollbarService } from 'ngx-malihu-scrollbar';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PageComponent],
      // imports: [MalihuScrollbarService]
      providers: [MalihuScrollbarService]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

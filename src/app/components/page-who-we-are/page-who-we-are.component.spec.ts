import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWhoWeAreComponent } from './page-who-we-are.component';

describe('PageWhoWeAreComponent', () => {
  let component: PageWhoWeAreComponent;
  let fixture: ComponentFixture<PageWhoWeAreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWhoWeAreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWhoWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

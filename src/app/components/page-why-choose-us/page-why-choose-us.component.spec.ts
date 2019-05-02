import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWhyChooseUsComponent } from './page-why-choose-us.component';

describe('PageWhyChooseUsComponent', () => {
  let component: PageWhyChooseUsComponent;
  let fixture: ComponentFixture<PageWhyChooseUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWhyChooseUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWhyChooseUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

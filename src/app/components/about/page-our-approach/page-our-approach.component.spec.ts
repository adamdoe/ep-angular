import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOurApproachComponent } from './page-our-approach.component';

describe('PageOurApproachComponent', () => {
  let component: PageOurApproachComponent;
  let fixture: ComponentFixture<PageOurApproachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOurApproachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOurApproachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

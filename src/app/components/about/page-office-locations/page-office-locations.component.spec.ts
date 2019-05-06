import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOfficeLocationsComponent } from './page-office-locations.component';

describe('PageOfficeLocationsComponent', () => {
  let component: PageOfficeLocationsComponent;
  let fixture: ComponentFixture<PageOfficeLocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOfficeLocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOfficeLocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

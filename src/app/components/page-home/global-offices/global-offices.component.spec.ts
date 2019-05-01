import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalOfficesComponent } from './global-offices.component';

describe('GloalOfficesComponent', () => {
  let component: GlobalOfficesComponent;
  let fixture: ComponentFixture<GlobalOfficesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalOfficesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalOfficesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

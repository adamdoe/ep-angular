import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapabilityItemComponent } from './capability-item.component';

describe('CapabilityItemComponent', () => {
  let component: CapabilityItemComponent;
  let fixture: ComponentFixture<CapabilityItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapabilityItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapabilityItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalReachComponent } from './global-reach.component';

describe('GlobalReachComponent', () => {
  let component: GlobalReachComponent;
  let fixture: ComponentFixture<GlobalReachComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalReachComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalReachComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

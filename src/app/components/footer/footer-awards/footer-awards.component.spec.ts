import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAwardsComponent } from './footer-awards.component';

describe('FooterAwardsComponent', () => {
  let component: FooterAwardsComponent;
  let fixture: ComponentFixture<FooterAwardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterAwardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterAwardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

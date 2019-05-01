import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCopyrightLineComponent } from './footer-copyright-line.component';

describe('FooterCopyrightLineComponent', () => {
  let component: FooterCopyrightLineComponent;
  let fixture: ComponentFixture<FooterCopyrightLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterCopyrightLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterCopyrightLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

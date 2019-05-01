import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterSocialIconsComponent } from './footer-social-icons.component';

describe('FooterSocialIconsComponent', () => {
  let component: FooterSocialIconsComponent;
  let fixture: ComponentFixture<FooterSocialIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterSocialIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

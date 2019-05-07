import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleNoBackgroundComponent } from './title-no-background.component';

describe('TitleNoBackgroundComponent', () => {
  let component: TitleNoBackgroundComponent;
  let fixture: ComponentFixture<TitleNoBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitleNoBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitleNoBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

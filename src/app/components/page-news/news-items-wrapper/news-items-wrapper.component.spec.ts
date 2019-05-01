import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsItemsWrapperComponent } from './news-items-wrapper.component';

describe('NewsItemsWrapperComponent', () => {
  let component: NewsItemsWrapperComponent;
  let fixture: ComponentFixture<NewsItemsWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsItemsWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsItemsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageVideosComponent } from './page-videos.component';

describe('PageVideosComponent', () => {
  let component: PageVideosComponent;
  let fixture: ComponentFixture<PageVideosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageVideosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageVideosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

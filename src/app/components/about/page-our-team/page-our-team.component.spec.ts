import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOurTeamComponent } from './page-our-team.component';

describe('PageOurTeamComponent', () => {
  let component: PageOurTeamComponent;
  let fixture: ComponentFixture<PageOurTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageOurTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageOurTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

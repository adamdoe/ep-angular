import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TombstoneSectionComponent } from './tombstone-section.component';

describe('TombstoneSectionComponent', () => {
  let component: TombstoneSectionComponent;
  let fixture: ComponentFixture<TombstoneSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TombstoneSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TombstoneSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

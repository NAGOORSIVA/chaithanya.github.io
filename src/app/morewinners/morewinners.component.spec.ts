import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MorewinnersComponent } from './morewinners.component';

describe('MorewinnersComponent', () => {
  let component: MorewinnersComponent;
  let fixture: ComponentFixture<MorewinnersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorewinnersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MorewinnersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

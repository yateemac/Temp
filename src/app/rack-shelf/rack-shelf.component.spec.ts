import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RackShelfComponent } from './rack-shelf.component';

describe('RackShelfComponent', () => {
  let component: RackShelfComponent;
  let fixture: ComponentFixture<RackShelfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RackShelfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RackShelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveApproachFormarrayComponent } from './reactive-approach-formarray.component';

describe('ReactiveApproachFormarrayComponent', () => {
  let component: ReactiveApproachFormarrayComponent;
  let fixture: ComponentFixture<ReactiveApproachFormarrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReactiveApproachFormarrayComponent]
    });
    fixture = TestBed.createComponent(ReactiveApproachFormarrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

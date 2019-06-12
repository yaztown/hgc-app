import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimingControllerInfoComponent } from './timing-controller-info.component';

describe('TimingControllerInfoComponent', () => {
  let component: TimingControllerInfoComponent;
  let fixture: ComponentFixture<TimingControllerInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimingControllerInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimingControllerInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

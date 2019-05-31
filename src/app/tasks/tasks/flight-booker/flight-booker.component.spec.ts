import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightBookerComponent } from './flight-booker.component';

describe('FlightBookerComponent', () => {
  let component: FlightBookerComponent;
  let fixture: ComponentFixture<FlightBookerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlightBookerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightBookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight-booker',
  templateUrl: './flight-booker.component.html',
  styleUrls: ['./flight-booker.component.scss']
})
export class FlightBookerComponent implements OnInit {

  roundTrip = false;

  tomorrow = new Date(Date.now() + 86400000);

  start = [
    this.tomorrow.getFullYear(),
    ('0' + (this.tomorrow.getMonth() + 1)).slice(-2),
    ('0' + this.tomorrow.getDate()).slice(-2)
  ].join('-');

  end = this.start;

  startDate: Date;
  endDate: Date;

  flightBooked: string;

  constructor() { }

  ngOnInit() {
    this.startDate = this.stringToDate(this.start);
    this.endDate = this.stringToDate(this.end);
  }

  calculateStartDate(start: string) {
    this.startDate = this.stringToDate(start);
  }

  calculateEndDate(end: string) {
    this.endDate = this.stringToDate(end);
  }

  stringToDate(s: string) {
    const split = s.split('-');
    return new Date(+split[0], +split[1] - 1, +split[2]);
  }

  bookFlight() {
    const oneWayAlert = `Flight booked for ${this.startDate.toDateString()}!`;
    const roundTripAlert = `Flight booked for ${this.startDate.toDateString()} through ${this.endDate.toDateString()}!`;
    this.flightBooked = this.roundTrip ? roundTripAlert : oneWayAlert;;
  }

  datesValid() {
    const startValid = this.startDate instanceof Date && !isNaN(+this.startDate);
    const endValid = this.endDate instanceof Date && !isNaN(+this.endDate);
    return startValid && endValid;
  }

}

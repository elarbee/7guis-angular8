import { Component, OnInit } from '@angular/core';
import {interval} from 'rxjs';
import {filter} from 'rxjs/operators';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  duration = 50;
  maxTime = 100;
  constructor() { }

  // https://www.learnrxjs.io/operators/creation/interval.html
  ngOnInit() {
    const source = interval(10).pipe(filter(() => this.duration <= this.maxTime));
    source.subscribe(() => this.duration += .01);
  }

  checkMaxExceeded() {
    const greaterThanMax = this.duration > this.maxTime;
    this.duration = greaterThanMax ? this.maxTime : this.duration;
  }

}

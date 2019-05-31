import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './tasks/counter/counter.component';
import { TemperatureConverterComponent } from './tasks/temperature-converter/temperature-converter.component';
import { FlightBookerComponent } from './tasks/flight-booker/flight-booker.component';
import { TimerComponent } from './tasks/timer/timer.component';
import { CRUDComponent } from './tasks/crud/crud.component';
import { CircleDrawerComponent } from './tasks/circle-drawer/circle-drawer.component';
import { CellsComponent } from './tasks/cells/cells.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CounterComponent, TemperatureConverterComponent, FlightBookerComponent, TimerComponent, CRUDComponent, CircleDrawerComponent, CellsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [CounterComponent, TemperatureConverterComponent, FlightBookerComponent, TimerComponent, CRUDComponent, CircleDrawerComponent, CellsComponent]
})
export class TasksModule { }

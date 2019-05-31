import { Component } from '@angular/core';

@Component({
  selector: 'app-temperature-converter',
  templateUrl: './temperature-converter.component.html'
})
export class TemperatureConverterComponent {

  celsius = 0;
  fahrenheit = 0;

  celsiusToFahrenheit = n => n * (9 / 5) + 32;
  fahrenheitToCelsius = n => (n - 32) * (5 / 9);

  constructor() { }

  fahrenheitInput(f: number) {
    f = +f;
    this.celsius = +this.fahrenheitToCelsius(f).toFixed(1);
  }

  celsiusInput(c: number) {
    c = +c;
    this.fahrenheit = +this.celsiusToFahrenheit(c).toFixed(1);
  }

}

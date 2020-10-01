import { Component } from '@angular/core';
import { Country } from './models/country.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'preparcial';
  countries: Country[] = [];
  regionChanged(evt) {
    this.countries = evt;
  }
}

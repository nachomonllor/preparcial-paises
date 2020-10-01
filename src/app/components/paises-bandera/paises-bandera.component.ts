import { Component, OnInit, Input } from '@angular/core';
import { Country } from '../../models/country.interface';

@Component({
  selector: 'app-paises-bandera',
  templateUrl: './paises-bandera.component.html',
  styleUrls: ['./paises-bandera.component.scss']
})
export class PaisesBanderaComponent implements OnInit {
  @Input() paises: Country[];
  constructor() { }

  ngOnInit(): void {
  }

}

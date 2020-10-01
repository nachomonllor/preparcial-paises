import { environment } from './../../../environments/environment';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Country } from '../../models/country.interface';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.scss']
})
export class RegionesComponent implements OnInit {
  @Output() regionChanged = new EventEmitter<Country>();
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
  }
  selectRegion(region: string) {
    const url = `${environment.apiUrl}/${region}`;
    this.httpService.get(url).subscribe(counries => {
      debugger
      this.regionChanged.emit(counries);
    });
  }
}

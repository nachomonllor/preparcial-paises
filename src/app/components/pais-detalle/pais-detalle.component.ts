import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pais-detalle',
  templateUrl: './pais-detalle.component.html',
  styleUrls: ['./pais-detalle.component.scss']
})
export class PaisDetalleComponent implements OnInit {
  @Input() pais;
  constructor() { }

  ngOnInit(): void {
  }

}

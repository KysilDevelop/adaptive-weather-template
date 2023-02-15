import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.scss']
})
export class CitiesComponent implements OnInit {

  @Input() cities:any;
  @Input() current:any;
  @Output() cityEvent = new EventEmitter<string>();

  constructor() { }


  ngOnInit(): void {
    this.current = this.cities[0];
    console.log('Cities:', this.cities);
  }

  setCity(city:any) {
    this.current = city;
  }
  selectCity(city:any) {
    this.cityEvent.emit(city);
  }

}

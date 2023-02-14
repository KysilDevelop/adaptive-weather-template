import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  cities = [
    {
      name: 'Lviv',
      code: 'ua'
    },
    {
      name: 'Kyiv',
      code: 'ua'
    },
    {
      name: 'Warszawa',
      code: 'pl'
    },
    {
      name: 'Tbilisi',
      code: 'ge'
    },
    {
      name: 'New York',
      code: 'us'
    }
  ];

  main: any;
  // cities:any;
  current: any;
  status:boolean = false;

  constructor (private service: WeatherService) {
    
  }

  ngOnInit(): void {
    this.setDefaultCity();
    
    // this.getLocation(this.current);
  }
  setDefaultCity() {
    this.service.getData(this.cities[0]).subscribe((data) => {
      this.getMain(data);

    });
  }

  toggleMenu() {
    this.status = !this.status;
    console.log('Toogle', this.status);
  }

  getLocation(loc:any) {
    this.service.getData(loc).subscribe((data) => {
      this.getMain(data);
    });
  }

  getMain(data:any) {
    for (var key in data) {
      if (key === 'main') {
        this.main = data[key];
      }
    }
    return this.main;
  }

  getCity(city:any) {
    this.getLocation(city);
  }

  

}

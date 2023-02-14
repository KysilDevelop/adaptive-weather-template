import { Component, Input, OnChanges } from '@angular/core';

interface IWeather {
  temp: number;
  humid: number;
}

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnChanges {

  @Input() weather: any;
  data: any;
  formatTemp: string = 'c';

  constructor() { }



  ngOnChanges(changes: any): void {
    if (changes.weather.currentValue) {
      this.feelWeatherData(changes.weather.currentValue);
    }


    //   let dat:IWeather = {
    //     temp: this.weather.temp,
    //     humid: this.weather.humidity
    //   }

    //   console.log(dat, this.weather);
  }
  setFormat(name: string) {
    this.formatTemp = name;
  }

  feelWeatherData(data: any) {
    let obj: IWeather = {
      temp: data.temp,
      humid: data.humidity
    }
    this.data = obj;
    console.log(obj);
  }


}

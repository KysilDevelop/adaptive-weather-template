import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor( protected http: HttpClient ) {}

  getData(data:any) {
    return this.http.get('http://api.openweathermap.org/data/2.5/weather?q=' + data.name + ',' + data.code + '&APPID=5be420ad3035ab0d9fb6121d5d9406af');

  }
}

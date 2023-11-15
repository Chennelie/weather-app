import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { WeatherData } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  // Creating an object when the maximum requests has been reached for the API
  getWeatherData(cityName: string): WeatherData {    
    var weather : WeatherData = {
      main: {
        temp: 55,
        feels_like: 50,
        temp_max: 60,
        temp_min: 45,
        pressure: 50,
        humidity: 90
      }, 
      wind: {
        speed: 12
      },
      name: cityName
    }

    return weather;
  }

  // Call to the API to get the data
  // getWeatherData(cityName: string): Observable<any> {    
  //   return this.http.get('https://open-weather13.p.rapidapi.com/city/' + cityName, {
  //     headers: new HttpHeaders()
  //     .set('X-RapidAPI-Key', 'df155f6f1emshe33507984822d52p18a04ejsn0af0f6543084')
  //     .set('X-RapidAPI-Host', 'open-weather13.p.rapidapi.com')
  //   })
  // }
}

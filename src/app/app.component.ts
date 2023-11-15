import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { WeatherData } from './models/weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private weatherService: WeatherService) {}

  weatherData?: WeatherData;

  ngOnInit(): void {

    // Use this part when you use the mock object to get the data 
    this.weatherData = this.weatherService.getWeatherData('London');

    // Use this pat when you use the API call to get the data
    // this.weatherService.getWeatherData('London')
    // .subscribe({
    //   next: (response: any) => {
    //     this.weatherData = response;
    //     console.log(response);
    //   }
    // })
  }
}

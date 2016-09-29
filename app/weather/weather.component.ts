import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { Weather } from './weather';

@Component({
    moduleId: module.id,
    selector: 'weather',
    templateUrl: './weather.component.html'
})
export class WeatherComponent implements OnInit {

   public weather:String = "Minneapolis 62 - Mostly Cloudy"
   public high:String = "High: 61"
   public low:String = "Low: 49"
    constructor(private weatherService:WeatherService) { }

    ngOnInit() { 
         this.weatherService.getWeather().then(w => {
             this.weather = `Minneapolis ${w.currentTemp} - ${w.description}`;
             this.high = w.high;
             this.low = w.low;
         });
    }
}
import { Injectable } from '@angular/core';
import {  Http } from '@angular/http';
import { Weather } from './weather';

@Injectable()
export class WeatherService {
private url = `https://query.yahooapis.com/v1/public/yql?q=select * from weather.forecast where u='f' AND
                 woeid in (select woeid from geo.places(1) where text=\" minneapolis \")&format=json
            `;
    constructor(private http: Http) { }

    getWeather() : Promise<Weather> {
         return this.http
         .get(this.url)
         .toPromise()
         .then(response => {
             const r = response.json().query.results.channel;
             const ct = r.item.condition.temp;
             const f =r.item.forecast[0];
            const {high, low, text} = f
              return new Weather(ct,text,high,low)
         })
         .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.essage || error);
    }
}
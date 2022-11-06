import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { WeatherApp } from '../models/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  apiKey:string='01b84c88f2abac4bd5242a2ad6dbe731'
  url:string ='';
  constructor(private http:HttpClient) { 

    this.url= `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&q=`
  }

  getWeather(cityName:string){
    return this.http.get(`${this.url}${cityName}`)
  }
  
  
}



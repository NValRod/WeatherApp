import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WeatherApp';


  weather:any;

  constructor(private WeatherService:WeatherService){

  }

  ngOnInit(): void {

  }  

  getWeath(cityName:string){
    this.WeatherService.getWeather(cityName)
    .subscribe(
      res => [
        console.log(res),
        this.weather = res],
      err=> console.log(err)
    )
  }

  submitLoc(cityName:HTMLInputElement){
    this.getWeath(cityName.value)
    console.log(cityName.value);
    cityName.value = '';
    cityName.focus();
    return false
  }
}

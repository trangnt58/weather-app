import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
	providedIn: 'root'
})
export class WeatherService {

	constructor(private http: Http) { }

	getListCity(){
		let apiUrl = './assets/data/city.list.min.json';
		return this.http.get(apiUrl)
		.pipe(map((response: any) => response.json()));
	}  

	getWeatherByCityName(cityName): Observable<any>{
        return this.http.get(
            environment.baseUrl +
            'weather?q='+ cityName +
            '&appid='+ environment.appId +
            '&units=' + environment.units
            )
        .pipe(map(response => response.json()))
    }

    getWeatherByTime(lat, lon, time): Observable<any>{
    	return this.http.get(
            environment.weatherUrl + '/' +
            environment.darkSkyId + '/' + lat + ',' +
            lon + ',' + time
            )
        .pipe(map(response => response.json()))
    }

    getLatLngByAddress(address): Observable<any>{
        return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' +
            address + '&key=' + environment.geoCodingId)
        .pipe(map(response => response.json()))
    }

}

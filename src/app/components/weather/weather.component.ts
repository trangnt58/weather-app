import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {WeatherService} from '../../services/weather.service';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
	constructor(private weatherService: WeatherService){}
	weatherForm = new FormGroup({
		city: new FormControl(),
		date: new FormControl(new Date())
	});
	error_message: string;
	isLoading: boolean = false;
	cities: Array<Object> = [];
	weatherData: Object;
	filteredOptions: Observable<Object[]>;

	ngOnInit() {
		this.weatherService.getListCity()
		.subscribe((res) => {
			this.cities = res;
		});

		this.filteredOptions = this.weatherForm.get('city').valueChanges
		.pipe(
			startWith(''),
			map(value => this._filter(value))
			);


	}

	private _filter(value: string): Object[] {
		const filterValue = value.toLowerCase();
		const allResult = this.cities.filter(option => option['name'].toLowerCase().includes(filterValue));
		const limitResult = allResult.slice(0, 10);
		return limitResult;
	}

	getWeather() {
		this.isLoading = true;
		this.error_message = null;
		var time = this.weatherForm.get('date').value.getTime();
		var ts = Math.round(time / 1000);

		this.weatherService.getLatLngByAddress(this.weatherForm.get('city').value).subscribe((res) => {
			console.log(res);
			if (res.results[0]) {
				var {lat, lng} = res.results[0].geometry.location;
				var address = res.results[0].formatted_address;
				console.log(lat, lng);
				this.weatherService.getWeatherByTime(lat, lng, ts).subscribe((res) => {
					var weather = res.daily.data[0];
					weather['address'] = address;
					this.weatherData = weather;
					console.log(weather);
				})
			} else {
				this.error_message = res.error_message;
			}
			this.isLoading = false;
			
		}, (error) => {
			console.log(error);
			this.error_message = error;
			this.isLoading = false;
		});
	}
}

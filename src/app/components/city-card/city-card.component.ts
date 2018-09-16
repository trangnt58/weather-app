import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-city-card',
	templateUrl: './city-card.component.html',
	styleUrls: ['./city-card.component.css']
})
export class CityCardComponent implements OnInit {
	@Input() weather: any;
	imageUrl: string;
	constructor() { }

	ngOnInit() {
		
	}

	ngOnChanges() {
		var url = '/assets/images/';
		console.log(this.weather.icon);
		switch (this.weather.icon) {
			case 'clear-day':
			case 'clear-night':
			url += 'clear';
			break;
			case 'rain':
			url += 'rain';
			break;
			case 'snow' :
			url += 'snow';
			break;
			case 'partly-cloudy-day':
			case 'partly-cloudy-night':
			url += 'partly_cloudy';
			break;
			case 'sleet':
			case 'wind':
			case 'fog':
			case 'clody':
			default: 
		}
		url += '.png';
		console.log(url);
		this.imageUrl = url;
	}

}

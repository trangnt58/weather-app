import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'f2c'
})
export class FahrenheitCelsiusPipe implements PipeTransform {
	transform(fahrenheit:number): string {
		return ((fahrenheit-32) * 5 / 9).toFixed(1).toString();
	}

}

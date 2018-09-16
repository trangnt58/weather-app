import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule} from '@angular/material';
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { MatDatepickerModule} from '@angular/material/datepicker';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WeatherComponent } from './components/weather/weather.component';
import { WeatherSearchComponent } from './components/weather-search/weather-search.component';
import { CityCardComponent } from './components/city-card/city-card.component';
import { FahrenheitCelsiusPipe } from './pipes/fahrenheit-celsius.pipe';
import {MatCardModule} from '@angular/material/card';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherSearchComponent,
    CityCardComponent,
    FahrenheitCelsiusPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatAutocompleteModule, MatInputModule,
    FormsModule, ReactiveFormsModule,
    MatButtonModule, MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    FlexLayoutModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

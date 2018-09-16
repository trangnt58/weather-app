// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  appId: '4dfcc82d16b02931f1a1060b03828f29',
  baseUrl: 'http://api.openweathermap.org/data/2.5/', 
  units:'metric',
  darkSkyId: '5c75672fef1e54e6a516e5bc4bbe0b6c',
  weatherUrl: 'https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast',
  geoCodingId: 'AIzaSyAYrCfXjWEHQabkXo5nEV0D2D0l5uWv8kQ'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyCQ2r3CqlK6Wx-2arSX81ovBOPT8cFngL0',
    authDomain: 'ifpe-angular.firebaseapp.com',
    databaseURL: 'https://ifpe-angular.firebaseio.com',
    projectId: 'ifpe-angular',
    storageBucket: 'ifpe-angular.appspot.com',
    messagingSenderId: '40667023248'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

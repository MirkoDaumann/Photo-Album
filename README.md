# PhotoAlbum

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

This will create multiple files under `./dist/Photo-Album`. If you want to run this, use http-server (`npm i -g http-server`) in the directory. (`cd dist/Photo-album` --> `http-server`)
To build and test the app under "live-status". Run either `ng build` or `ng build --prod` in the terminal.

## Running unit tests

To execute Unit-Tests ones needs to either run `npm run test` or simply just type `jest` into a terminal.
If you want to see the coverage of those Unit-Tests run `npm run test:coverage` or  `jest --coverage`.
It creates a coverage folder in the project structure. Navigate to coverage - Icov-report and open `Index.html` in a Browser.

Typicly I would mock all child components from a component i want to Test with `ng-mocks (npm i ng-mocks)`.

` Example from the AppComponent
declarations: [AppComponent, HeaderComponent, UserOverviewComponent],
would turn into [AppComponent, MockComponents(HeaderComponent, UserOverviewComponent)]
`
This has a big adventage that all other child dependencies would be gone too (Services imports etc).

But currently there is an issue with this Library (https://github.com/ike18t/ng-mocks/issues/1427);

Autogenerated Unittestfiles have not been removes, because every component should have some form of unittests if there is logic in there.
Other non autogenerated Unittests can be found in `user-address.pipe.spec.ts` and `album-view.component.spec.ts`.

## Running end-to-end tests

To run E2E-Tests type `ng e2e` or `npm run cypress:open`. This will open the Electron-Cypress-Application.
There you can either run all the Tests in the Application or select a single one for Cypress to run.
If you just want to run the E2E-Tests without having to open the Electron-Cypress-Application just type `npm run cypress:run`.

There are currently 3 working E2E Tests. They are found under `./cypress/integration/**`.

## Error-handling

Currently this app handles Error's in 2 different way:
There is a global Service called : `http-interceptor.service.ts`, which catches all HttpError's and throws a Error notification.
In addition every component, where there is a subscription to an Observable or something similiar can additionally handle the Error's there as shown in `app.component.ts`. 

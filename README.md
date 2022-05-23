# ThoughtTrace Store Normalization Test

The purpose of this test is a to write a small Angular application which fetches deeply nested data from a JSON file and models the data in a normalized fashion within an NGRX store.

## Requirements

- Write the application from scratch.
  - Feel free to use the tooling of your choice (Angular CLI, NX, etc).
  - Feel free to use any npm libraries that you like.
- Place the provided "magazines.json" file in your "assets" directory and fetch it via an HTTP request.
  - This is a JSON file for the sake of limiting scope, but let's imagine that it would have come from an API if this was a real-world application.
- The user should see a "fetch" button. When they click the "fetch" button, we should initiate an HTTP request to fetch magazines. When magazines are returned, they should be displayed to the user as raw, unstyled JSON.
- Structure the data in your NGRX store in a flattened, normalized fashion. Display it to the user in a nested, denormalized fashion.
  - For the sake of limiting scope we don't have to handle any update logic, but let's imagine that we'd need to keep the data up-to-date based on user actions and server events if this was a real-world application.
- Follow all of your favorite best practices in terms of how the application is architected in general, including but not limited to:
  - How the store is structured in general
  - How you name and dispatch your actions
  - How you design your facades
  - How you fetch data
  - Anything else that you consider to be valuable or important
- For the sake of limiting scope, we only need one component. It can be the auto-generated app component. Don't worry about styling the HTML or CSS in any way. The button can be a regular vanilla HTML button, and the data can be displayed as raw JSON.

## Project

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6 and uses [NGRX](https://ngrx.io/) version 13.2.0 for state management.

## Dependencies

Run `npm i` to install the project dependancies.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

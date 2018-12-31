# PortalUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


## SHORTCUTS


################################################################
################################################################
###################### Angular Setup ###########################
################################################################
################################################################

#Step 1: Install the Angular CLI
You use the Angular CLI to create projects, generate application and library code, and perform a variety of ongoing development tasks such as testing, bundling, and deployment.

Install the Angular CLI globally.

To install the CLI using npm, open a terminal/console window and enter the following command:
npm install -g @angular/cl

#Step 2: Create a workspace and initial application
You develop apps in the context of an Angular workspace. A workspace contains the files for one or more projects. A project is the set of files that comprise an app, a library, or end-to-end (e2e) tests.

To create a new workspace and initial app project:

Run the CLI command ng new and provide the name my-app, as shown here:

ng new my-app

The ng new command prompts you for information about features to include in the initial app project. Accept the defaults by pressing the Enter or Return key.

The Angular CLI installs the necessary Angular npm packages and other dependencies. This can take a few minutes.

It also creates the following workspace and starter project files:

A new workspace, with a root folder named my-app
An initial skeleton app project, also called my-app (in the src subfolder)
An end-to-end test project (in the e2e subfolder)
Related configuration files
The initial app project contains a simple Welcome app, ready to run.

#Step 3: Serve the application
Angular includes a server, so that you can easily build and serve your app locally.

Go to the workspace folder (my-app).

Launch the server by using the CLI command ng serve, with the --open option.
cd my-app
ng serve --open

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.
The --open (or just -o) option automatically opens your browser to http://localhost:4200/.
Your app greets you with a message:

#Step 4 Create the heroes component
Using the Angular CLI, generate a new component named heroes.

ng generate component heroes




################################################################
################################################################
###################### Material Setup #########################@
################################################################
################################################################
#Step 1: Install Angular Material, Angular CDK and Angular Animations
You can use either the npm or yarn command-line tool to install packages. Use whichever is appropriate for your project in the examples below.

link NPM
npm install --save @angular/material @angular/cdk @angular/animations

#Step 2: Configure animations
Once the animations package is installed, import BrowserAnimationsModule into your application to enable animations support.

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
Alternatively, you can disable animations by importing NoopAnimationsModule.

import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
 
#Step 3: Import the component modules
Import the NgModule for each component you want to use:

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  ...
  imports: [MatButtonModule, MatCheckboxModule],
  ...
})
export class PizzaPartyAppModule { }
Alternatively, you can create a separate NgModule that imports all of the Angular Material components that you will use in your application. You can then include this module wherever you'd like to use the components.

import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }
Whichever approach you use, be sure to import the Angular Material modules after Angular's BrowserModule, as the import order matters for NgModules.

#Step 4: Include a theme
Including a theme is required to apply all of the core and theme styles to your application.

To get started with a prebuilt theme, include one of Angular Material's prebuilt themes globally in your application. If you're using the Angular CLI, you can add this to your styles.css:

@import "~@angular/material/prebuilt-themes/indigo-pink.css";
If you are not using the Angular CLI, you can include a prebuilt theme via a <link> element in your index.html.

For more information on theming and instructions on how to create a custom theme, see the theming guide.

#Step 5: Gesture Support
Some components (mat-slide-toggle, mat-slider, matTooltip) rely on HammerJS for gestures. In order to get the full feature-set of these components, HammerJS must be loaded into the application.

You can add HammerJS to your application via npm, a CDN (such as the Google CDN), or served directly from your app.

To install via npm, use the following command:

 NPM
npm install --save hammerjs

#Step 6 (Optional): Add Material Icons
If you want to use the mat-icon component with the official Material Design Icons, load the icon font in your index.html.

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
For more information on using Material Icons, check out the Material Icons Guide.

Note that mat-icon supports any font or svg icons; using Material Icons is one of many options.
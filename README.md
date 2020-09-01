This repo contains the code for Emojifier, which is a sentiment analysis full-stack web app that allows a user to input an image URL of a person and replaces their face with an apropriate emoji based on their facial expression.

Demo image link:

https://docs.microsoft.com/en-ca/azure/cognitive-services/face/images/facefindsimilar.queryface.jpg


MongoDB Windows Startup Command:

`"C:\Program Files\MongoDB\Server\4.0\bin\mongod.exe" --dbpath="c:\data\mongodb"`

##e2e/

Contains "end-to-end" test files for the project.

##angular.json

This file contains info about the angular project.

##package.json

This file includes all of the node modules that the project needs to run.

##tsconfig.json

Configures TypeScript, a superset of JavaScript that is used in Angular.

##server/index.ts

Manages the back end, or server-side, of the application.

##server/db.ts

Manages the connection to MongoDB.

##src/assets

Contains the fonts and images used in the project.

##src/environments

Contains files defining project behaviour depending if on you're in development or production mode.

##src/app/app.component.ts

This file adds the Emojified image to the page.

##src/app/shared/face.model.ts

Defines the form of data obtained from the Microsoft Face API

##src/app/safehtml.pipe.ts

Transforms a component attribute for display.

##src/app/api.service.ts

Defines a service, code which doesn't modify any visuals, for getting the back-end API response.

##src/app/app-routing.module.ts

Used for managing multiple view states in complex apps.




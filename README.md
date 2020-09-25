# simple-list-detail-select-flow
A React/SASS App, showing a simple list view, item detail view and item select user journey. 

Tested running node 14x

## Setup

Clone and run 
`npm install`
`npm run build` to create a build folder
`npm start` to run in development mode

## Notes

Uses the Movie database api as a data source and queries three specific categories
The data is held in an application store using react context

Each category appears on the homepage as carousel. Please Note: the carousel is simply a hozontal scroll view, it does not automatically loop through the items.
Items in the carousels can be clicked to view details.
Categories are colour coded, in the detail view and in the carousels the font color is set to match each category.
Items can be added to a wishlist. The wishlist view (for the purposes of this test) is NOT persisted. The wishlist will clear on refresh.

Everything here is handrolled, so no use of create-react-app or external librairies and all the webpack build configs are written from scratch.

## SCSS

Styles are handled using SCSS with a simple mixin and variable setup to demonstrate an understanding of SCSS architecture. Components have their own SCSS files where appropriate.

## Desktop support only

The site is not optimised for mobile use. It is developed and tested on desktop only and is not responsive for smaller screen sizes

## Optimisation

This is a demonstration site, at the time of writing there is no lazy loading or code splitting implimented.



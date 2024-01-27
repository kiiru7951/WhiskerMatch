# WhiskerMatch
WhiskerMatch is a pet adoption website.
It uses PetFinder's API to match potential pet adopters with their current owners.

The page contains a filter where users select which type of animal they want to find, Cat, Dog, Bird or Rabbit, WhiskerMatch displays their images.
Included details are; name, age, sex, breed, description and status (Adoptable/Adopted).
Pressing "Adopt" changes status to "Adopted"

## Project Structure
`index.html`
`style.css`
`index.js`

## Developed By;
Javascript, bootsrap, PetFinder API

## Issues
1. The API is usually authenticated via OAuth through inputing the `client_id` and `client_secret` to retrieve an access token before making any other calls.
Fetch requests must include s bearer `(access) token` which expires every hour.

2. Loading images impacts the performance of my web app. 

## Setup
Clone this repo into your local machine and open `index.js` then open `index.html` from your browser.

Either;
1. replace client ID and secret using your own from [Petfinder](https://www.petfinder.com/developers/), or;
2. replace access point, run;    
`curl -d "grant_type=client_credentials&client_id={CLIENT-ID}&client_secret={CLIENT-SECRET}" https://api.petfinder.com/v2/oauth2/token
`

# Author
Allan Kariuki

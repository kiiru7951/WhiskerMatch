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
The API is usually authenticated via oauth through inputing the client_id and client_secret to retrieve an access token before making any other calls.
Authorization requires bearer (access) token which expires every hour.

## Setup
Clone this repo into your local machine and open index.html from your browser.

To replace access point, run; 

curl -d "grant_type=client_credentials&client_id=cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA&client_secret=DztzYAfWzys6RR0feCq7cbzw4F7g2xDiU8XAZ8GZ" https://api.petfinder.com/v2/oauth2/token

# Author
Allan Kariuki

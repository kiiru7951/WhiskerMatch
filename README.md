# WhiskerMatch
WhiskerMatch is a pet adoption website.
It uses PetFinder's API to match potential pet adopters with their current owners.

Users select which type of animal they want to find, Cat, Dog, Bird or Rabbit, WhiskerMatch displays theeir images.
Included details are; name, age, sex, breed, description and status (Adoptable/Adopted).

## Developed By;
Javascript, bootsrap, PetFinder API

## Issues
Authorization requires bearer (access) token which expires every hour.

## Setup
To replace, run; 

curl -d "grant_type=client_credentials&client_id=cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA&client_secret=DztzYAfWzys6RR0feCq7cbzw4F7g2xDiU8XAZ8GZ" https://api.petfinder.com/v2/oauth2/token


# Author
Allan Kariuki

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});

// Defining Api URL
var url = 'http://api.petfinder.com/pet.getRandom?key=cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA&output=basic&format=json'
import { post, get } from 'axios';

// Replace these values with your actual Petfinder API credentials
const clientId = 'cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA';
const clientSecret = 'DztzYAfWzys6RR0feCq7cbzw4F7g2xDiU8XAZ8GZ';

// Request Access Token
const getToken = async () => {
  const tokenUrl = 'https://api.petfinder.com/v2/oauth2/token';

  try {
    const response = await post(tokenUrl, {
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
    });

    const accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error getting access token:', error.response ? error.response.data : error.message);
    throw error;
  }
};

// Use Access Token to Make a GET Request
const makeApiRequest = async (accessToken) => {
  const apiUrl = 'https://api.petfinder.com/v2/animals?'; // Replace with the actual API endpoint

  try {
    const response = await get(apiUrl, {
      headers: {
      Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('API Response:', response.data);
  } catch (error) {
    console.error('Error making API request:', error.response ? error.response.data : error.message);
  }
};

// Execute the process
getToken()
  .then((accessToken) => makeApiRequest(accessToken))
  .then(data => {
    displayAd(data);
  })
  .catch((error) => console.error('Error:', error));




  function displayAd(ad) {
    const adImage = document.getElementById("placeholder")
    const adName = document.getElementById("name")
    const adDescription = document.getElementById("description")
    const adCity = document.getElementById("city")
    const adBreed = document.getElementById("breedtext")
    const adAge = document.getElementById("age")
    const adSex = document.getElementById("sextext")

    adImage.src = ad.placeholder
    adImage.alt = ad.title
    adName.textContent = ad.name
    adDescription.textContent = ad.description
    adCity.textContent = ad.description
    adBreed.textContent = ad.breedtext
    adAge.textContent = ad.age
    adSex.textContent = ad.sextext
  }

  var template = `
  <div style="display: flex; flex-wrap: wrap;">
      {{#each response}}
          <img src="{{url}}" alt="{{id}}" style="margin: 5px;"/>
      {{/each}}
  </div>
  `;
  
  function constructVisualizerPayload() {
      return {response: pm.response.json()};
  }

  $('.body').click(function() { 
    $(this).addClass('shrink');
  });
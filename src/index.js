// Importing Environment Variables
import dotenv from 'dotenv';
dotenv.config({ path: '/.env' });
dotenv.config();
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;

// Update access token
let accessToken;
let tokenExpiration;

async function getAccessToken() {
  const tokenUrl = "https://api.petfinder.com/v2/oauth2/token";

  // Check if a valid token is already cached
  if (accessToken && Date.now() < tokenExpiration) {
    return accessToken;
  }

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `grant_type=client_credentials&client_id=${clientId}&client_secret=${clientSecret}`,
    });

    if (!response.ok) {
      throw new Error(`Failed to get access token. Status: ${response.status}`);
    }

    const data = await response.json();
    accessToken = data.access_token;
    // Set the expiration time of the token (3600 seconds)
    tokenExpiration = Date.now() + data.expires_in + (3600 * 1000);
    
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw error; // Re-throw the error to notify about the failure
  }
}


const petForm = document.querySelector("#pet-form");
const petList = document.getElementById("pet-list");
 
// Function to fetch pet data
async function fetchPetData() {
  try {
    await getAccessToken(); // Get or refresh the access token before making the API request

    const animal = document.querySelector("#animal").value;
    const apiUrl = `https://api.petfinder.com/v2/animals?type=${animal}&page=1&limit=10`;

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
      // Clear previous pet list
    petList.innerHTML = "";
  
    // Create and append elements for each pet
    data.animals.forEach(animal => {
      const petElement = createPetElement(animal);
      petList.appendChild(petElement);

      // Attach click event listener to update details
      petElement.addEventListener("click", function () {
        updateDetails(animal);
      });
    });
  } catch (error) {
    console.error('Request failed:', error);
  }
}

petForm.addEventListener("submit", function (e) {
  // Prevent the default form submission behavior
  e.preventDefault();
  fetchPetData();
});

//display pet details
function createPetElement(animal) {
  const petElement = document.createElement("div");
  petElement.classList.add("petListItem");
  petElement.innerHTML = `
    <img src="${animal.photos[0].medium}" alt="${animal.name}" />
    <p>${animal.name}</p>
  `;
  return petElement;
}

function updateDetails(animal) {
  const placeholderImage = document.getElementById("placeholder");
  const nameElement = document.getElementById("name");
  const breedText = document.getElementById("breedtext");
  const ageText = document.getElementById("agetext");
  const sexText = document.getElementById("sextext");

  // Check if animal.photos is defined and has at least one photo
  if (animal.photos && animal.photos.length > 0 && animal.photos[0].medium) {
    placeholderImage.src = animal.photos[0].medium;;
  } else {
    // Handle the case where there are no photos
    petElement.innerHTML = `
      <p>${animal.name}</p>
      <p>No photo available</p>
    `;
  }
  nameElement.innerHTML = `<h2>${animal.name}</h2>`;
  breedText.textContent = animal.breeds.primary;
  ageText.textContent = `${animal.age} ${animal.age === "Baby" ? "months" : "years"}`;
  sexText.textContent = animal.gender;
}


  // Wait for the DOM to be ready
  document.addEventListener('DOMContentLoaded', function () {
    // Get the form and the paragraph elements
    var emailForm = document.getElementById('emailForm');
    var logParagraph = document.getElementById('log');

    // Add an event listener for the form submission
    emailForm.addEventListener('submit', function (e) {
      // Prevent the default form submission behavior
      e.preventDefault();

      // Get the input value
      var newsletterInput = document.getElementById('newsletter');
      var inputValue = newsletterInput.value;

      // Display the input value in the paragraph
      logParagraph.textContent = '\nThank You for your interest.\nWe will reach out via ' + inputValue;
    });
  });


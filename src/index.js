
// Update access token
let accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJjUEJoUWdsS1MyZ2d6UXhWQ0xZRTJQVW56aGhBNGw5bzEzYUN3c2plVmVmSmpycTNIQSIsImp0aSI6ImY4MmViYWJjOTcyYjA5YzhlNjg4ZmRmYzI5YzFjM2Q3OGU1NzdlYjVjNDkwZTk4ZWQzNWU1ZGEzYzE5NjllNTM4NzU0MjIwZGM4ZmUxYWNlIiwiaWF0IjoxNzA2MjAyMjE5LCJuYmYiOjE3MDYyMDIyMTksImV4cCI6MTcwNjIwNTgxOSwic3ViIjoiIiwic2NvcGVzIjpbXX0.BG9CgrAI1_p-M4rvPPzWNc995UO7kOrW3f8EZUtLdQWxRWH5VWN-p5VIpMJ_K7Eq4mjLjH-9pn26JxZJGuOe8XOQMSZOGpXaBR_SR8oF3fke-AUSJwKCRgC-dvi6Zvm7WZg-LGyztlrlukSrE1-REDhJtJauut63g5QOGHaqBvLLwel0fNFhWDFzHy3RiPcvSumMMtU4lbtL8xIBkGKSoBy00-Jg3-OIEG2CtaT78cBJj-XMM9PQd4Sy-kmR_rOjL0FuCKshDNdUgPqtQMKT_KFzrVg10H1xWQA9AqksK9NGGoDewShFP6kFJ0JA-EJe7F4I5Q0K1TGI9QT4TIfIrg";
const petForm = document.querySelector("#pet-form");
const petListContainer = document.getElementById("pet-list-container");

// Function to fetch pet data
function fetchPetData() {
  const animal = document.querySelector("#animal").value;
  const apiUrl = `https://api.petfinder.com/v2/animals?type=${animal}&page=1&length=10`;

  fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
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
    })
    .catch(error => {
      console.error('Request failed:', error);
    });
}

petForm.addEventListener("submit", function (e) {
  e.preventDefault();
  fetchPetData();
});

//display pet details
function createPetElement(animal) {
  const petElement = document.createElement("div");
  petElement.classList.add("petListItem");
  petElement.innerHTML = `
    <img src="${animal.photos[0].medium}" alt="${animal.name}" loading="lazy" />
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
  const description = document.getElementById("description");


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
  description.textContent = animal.description;

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
      logParagraph.textContent = 'Thank You for your interest.\nWe will reach out via ' + inputValue;
    });
  });


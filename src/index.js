document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
/*import dotenv from "dotenv";
dotenv.config();
import { isValidZip, showAlert } from "./validate";

const API_KEY = process.env.API_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;*/

const API_KEY = "cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA";
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJjUEJoUWdsS1MyZ2d6UXhWQ0xZRTJQVW56aGhBNGw5bzEzYUN3c2plVmVmSmpycTNIQSIsImp0aSI6IjY0OGFmMTcwN2FkZWZjMjk1M2FiYmQ2M2I4MmFkZmRhN2U3ODk2OTZkMjQ2MmIxZmUyNzg1NzAyMzRkODE3NTNkZGJlNzA1Mzg5ZjRkZDBkIiwiaWF0IjoxNzA1NzA3OTY1LCJuYmYiOjE3MDU3MDc5NjUsImV4cCI6MTcwNTcxMTU2NSwic3ViIjoiIiwic2NvcGVzIjpbXX0.HLse_VnuvobvLCKESCow26XorZfcOjlj_HYAgr4dsD51g5AQXCVrv1Aoq0TGpbXjc_3oXnXZMtG1rwqHkFZ1blTnz1p3tRJo3SIv6B0D_QEgBfQTFFC1rTJxfXgkuQAxF0Fdo2ksxJiM9i7Pur3jbEAeSUGPUmo9y4MwOMQBOYqvvyodZd1v_L2z5e2GF8PlMUi6u5JO9uf8PXd5h26mi-iEvvjTvo7QwO9gqyw6C4NTI4DpiSqCfNGivhUBcO0HXeMwB_cOPOimZ6yHVD4d2MyGRw8ty8gp6wjr_pbEOZj_2KH3QWViFT5myHFBd9lrT92tr6KgS4t9YND9uNtGQA"


const petForm = document.querySelector("#pet-form");
petForm.addEventListener("submit", fetchAnimals);

function fetchAnimals(e) {
  e.preventDefault();
  const animal = document.querySelector("#animal").value;

  // Validate zip
 
 fetch(
    `https://api.petfinder.com/v2/animals?key=${API_KEY}&&type=${animal}`,
    {
      headers: {
        Authorization: `Bearer ${ACCESS_TOKEN}`,
      },
    }
  )
    .then((res) => res.json())
    // .then((data) => console.log(data.animals))
    .then((data) => showAnimals(data.animals))
    .catch((err) => console.log(err));
}

//Show listings of pets
function showAnimals(pets) {
  const petsImage = document.getElementById("placeholder")
  petsImage.src = pets.placeholder
  petsImage.alt = pets.name
  const results = document.querySelector("#results");
  results.innerHTML = "";
  //Loop through pets

  pets.forEach((pet) => {
    //output to page
    //console.log(pet);
    const div = document.createElement("div");
    div.classList.add("card", "card-body", "mb-3");
    div.innerHTML = `
        <div class="row" >
        <div class="col-sm-6">
          <h4>${pet.name}(${pet.age})</h4>
          <p class="text-secondary">${pet.breeds.primary}</p>
          ${pet.contact.address.address1 ? `<p>${pet.contact.address.address1}}</p>` : " " }
          <ul class="list-group">
          <li class="list-group-item">Phone: ${pet.contact.phone}</li>
          ${
            pet.contact.email
              ? `<li class="list-group-item">Email: ${pet.contact.email}</li>`
              : ' '
          }
        <li class="list-group-item">Shelter ID:${pet.id}</li>
          </ul>
        </div>
        <div class="col-sm-6 text-center">
          <img class="img-fluid rounded-circle mt-2" src="${
            pet.photos[0].medium
          }">
        </div>
        </div>
        `;
    results.appendChild(div);
  });
}

//Clicking button-52 should change Status to "Adopted"
document.getElementById("button-52").addEventListener("click", () => adoptStatus())
function adoptStatus() {
  document.getElementById("status").innerHTML = "Adopted";
}




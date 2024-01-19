document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
});
/*import dotenv from "dotenv";
dotenv.config();
import { isValidZip, showAlert } from "./validate";

const API_KEY = process.env.API_KEY;
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;*/

const API_KEY = "cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA";
const ACCESS_TOKEN = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJjUEJoUWdsS1MyZ2d6UXhWQ0xZRTJQVW56aGhBNGw5bzEzYUN3c2plVmVmSmpycTNIQSIsImp0aSI6ImM3NzJiZmYxNjg1MTAzMzczNDcwZjFlYTkyMTIyN2ZiZjk3MDYyZjY3NmVkYzVmMGU3NWQyNDU0NTk2ODE5OGViZDhhZGNhM2IxMWNjOWVkIiwiaWF0IjoxNzA1NzEzNjkzLCJuYmYiOjE3MDU3MTM2OTMsImV4cCI6MTcwNTcxNzI5Mywic3ViIjoiIiwic2NvcGVzIjpbXX0.Ampb4J7qtdXW9MTVHvGLDA5EzfiE2L6EfMViQMjI7FQ01Qn5-XeY0ny09X7JtKSYpOKDy_gsK-lVHJnDXr5mWDWqcZNoGYT4rhvi-2Y7SimTscNSd_OhC1T_ufLNqIUS08nmdfVKKfjOpFP9kZQZAVVbFLd_kTse5ZCnCOOW-WubO0K_Su8EKPvDTzqNxOLew3heDPjxw5osVOJdG-GA-9wmapUIE1FqDgzdCjIKM_CZVcGzJ40f0xiXI-oRWWbJuqgC25qTaS0OU8ASAEIdLqnYKr99RylqOf3B0fNxsPVKcetZqtaoAnI-pTpoyYKq6MAwB0sXHGyfpN_jTqTioQ"
//To acquire token: curl -d "grant_type=client_credentials&client_id=cPBhQglKS2ggzQxVCLYE2PUnzhhA4l9o13aCwsjeVefJjrq3HA&client_secret=DztzYAfWzys6RR0feCq7cbzw4F7g2xDiU8XAZ8GZ" https://api.petfinder.com/v2/oauth2/token

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
function showAnimals(pet) {
  const petImage = document.getElementById("placeholder")
  const petName = document.getElementById("name")
  const petStatus = document.getElementById("status")
  const petBreed = document.getElementById("breedtext")
  const petAge = document.getElementById("agetext")
  const petSex = document.getElementById("sextext")
  const petDescription = document.getElementById("description")

  petImage.src = pet.placeholder
  petImage.alt = pet.name

  //Loop through pets

  pet.forEach((pet) => {
    //output to page
    //console.log(pet);
    petName.textContent = pet.name
    petStatus.textContent = pet.status
    petDescription.textContent = pet.description
    petAge.textContent = pet.age
    petBreed.textContent = pet.petBreed    
    petSex.textContent = pet.sex
  });
}

//Clicking button-52 should change Status to "Adopted"
document.getElementById("button-52").addEventListener("click", () => adoptStatus())
function adoptStatus() {
  document.getElementById("status").innerHTML = "Adopted";
}




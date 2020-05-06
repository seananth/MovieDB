const API = "http://www.omdbapi.com/?t=";
const TITLE = "guardians+of+the+galaxy";
const YEAR = "2014";
const APIKEY = "apikey=c30c46df";

let searchInput = document.querySelector(".searchInput");

document.querySelector(".searchContainer").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(API + searchInput.value + "&y=" + YEAR + "&" + APIKEY)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);



    });

  
  console.log(searchInput.value);
  document.querySelector(".searchContainer").reset();
});

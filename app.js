const APIKEY = "apikey=c30c46df";
const API = `http://www.omdbapi.com/?t=guardians+of+the+galaxy&y=2014&${APIKEY}`;

let searchInput = document.querySelector(".searchInput");

document.querySelector(".searchContainer").addEventListener("submit", (e) => {
  e.preventDefault();

  console.log(searchInput.value);
  document.querySelector(".searchContainer").reset();
});

fetch(API)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });

/*
let movie = 'guardians of the galaxy';

console.log(movie.split(' ').join('+'));
*/

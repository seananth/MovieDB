//Core concept,
//Find a movie, add it to your watch list

const API = "http://www.omdbapi.com/?t=";
const TITLE = "guardians+of+the+galaxy";
const YEAR = "2014";
const APIKEY = "apikey=c30c46df";

let searchInput = document.querySelector(".searchInput");
let yearInput = document.querySelector("#yearInput");
let searchMovieCard = document.querySelector(".searchMovieCard");
let homeContent = document.querySelector(".homeContent");

/*
//build year loop for dropdown filter
function dropdownYear() {
  let start = 1940;
  let end = new Date().getFullYear();
  let options = "";

  for (let year = end; year >= start; year--) {
    options += "<option>" + year + "</option>";
  }
  document.getElementById("yearInput").innerHTML =
    "<option>" + "Release Year" + "</option>" + options;
}
dropdownYear();
*/
//when submit
document.querySelector(".searchContainer").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(API + searchInput.value + "&y=" + "&" + APIKEY)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      function renderMovie() {
        searchMovieCard.innerHTML =
          "<div class='searchPoster'>" +
          `<img src='${data.Poster}'>` +
          "</div>" +
          "<div class='info'>" +
          "<h1>" +
          data.Title +
          "</h1>" +
          "<p class='searchRating'> IMDb: " +
          data.imdbRating +
          "/10</p>" +
          "<p>" +
          data.Released +
          "</p>" +
          "<p>" +
          data.Plot +
          "</p>" +
          "</div>";
      }
      renderMovie();

    });

  document.querySelector(".searchContainer").reset();
});


//Home page movies

fetch(API + 'iron man' + "&y=" + "&" + APIKEY)
.then((response) => response.json())
.then((data) => {
  console.log(data)

  function renderMovie() {
    homeContent.innerHTML =
    "<div class='movieCards'>"+
      "<div class='poster'>" +
      `<img src='${data.Poster}'>` +
      "</div>" +
      "<div class='info'>" +
      "<h1>" +
      data.Title +
      "</h1>" +
      "<p class='searchRating'> IMDb: " +
      data.imdbRating +
      "/10</p>" +
      "<p>" +
      data.Released +
      "</p>" +
      "<p>" +
      data.Plot +
      "</p>" +
      "<button class='watchListButton'>"+
      "Add to Watch List"+
      "</button>"+
      "</div>" +
      "</div>";
  }



  renderMovie();  




})


//things to do

//popular / new movies displayed on homepage
//(maybe a function with innerHTML and then loop the shit out of it?)

//styling

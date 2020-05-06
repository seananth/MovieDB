const API = "http://www.omdbapi.com/?t=";
const TITLE = "guardians+of+the+galaxy";
const YEAR = "2014";
const APIKEY = "apikey=c30c46df";

let searchInput = document.querySelector(".searchInput");
let yearInput = document.querySelector("#yearInput");
let movieContainer = document.querySelector(".movieContainer");

//build year loop for dropdown
function dropdownYear() {
  let start = 1940;
  let end = new Date().getFullYear();
  let options = "";

  for (let year = end; year >= start; year--) {
    options += "<option>" + year + "</option>";
  }
  document.getElementById("yearInput").innerHTML = options;
}
dropdownYear();

//when submit
document.querySelector(".searchContainer").addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(API + searchInput.value + "&y=" + yearInput.value + "&" + APIKEY)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);

      function renderMovie() {
        movieContainer.innerHTML =
        "<div class='poster'>" +
          `<img src='${data.Poster}'>` +
          "</div>" +
          "<div class='info'>" +
          "<h1>" +
          data.Title +
          "</h1>" +
          "<p>" +
          data.Year +
          "</p>" +
          "</div>";

      }
      renderMovie();
    });

  console.log(searchInput.value);
  console.log(yearInput.value);
  document.querySelector(".searchContainer").reset();
});

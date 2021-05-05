"use strict";
const genres = document.querySelectorAll(".genre");
const movies = document.querySelectorAll(".movie");
let moviesSelected = [];

genres.forEach(function (genre) {
  genre.addEventListener("click", function (e) {
    e.preventDefault();

    let genreType = genre.textContent.toLowerCase();
    movies.forEach((movie) => {
      if (movie.classList.contains(genreType)) {
        movie.style.display = "block";
        console.log(movie);
      } else if (genreType === "all") {
        movie.style.display = "block";
      } else {
        movie.style.display = "none";
      }
    });
  });
});

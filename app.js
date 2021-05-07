"use strict";

// Global variables:
const genres = document.querySelectorAll(".genre");

const movies = document.querySelectorAll(".movie");
const searchBox = document.querySelector("#search");

searchBox.addEventListener("keyup", function (e) {
  e.preventDefault();
  const userSearch = e.target.value.toLowerCase();

  for (let i of movies) {
    let movie = i.textContent.toLowerCase();

    if (movie.indexOf(userSearch) === -1) {
      i.classList.add("hidden");
    } else {
      i.classList.remove("hidden");
    }
  }
});

// Filtering through movies function:
function filterMovies() {
  genres.forEach(function (genre) {
    genre.addEventListener("click", function (e) {
      // Preventing default to allow the classes to change and be removed:
      e.preventDefault();
      let genreType = genre.textContent.toLowerCase();

      //   Changing the font color of each selected genre:
      if (genre === genres[0]) {
        genre.classList.add("active-btn");
        genres[1].classList.remove("active-btn");
        genres[2].classList.remove("active-btn");
        genres[3].classList.remove("active-btn");
        genres[4].classList.remove("active-btn");
        genres[5].classList.remove("active-btn");
      } else if (genre === genres[1]) {
        genre.classList.add("active-btn");
        genres[0].classList.remove("active-btn");
        genres[2].classList.remove("active-btn");
        genres[3].classList.remove("active-btn");
        genres[4].classList.remove("active-btn");
        genres[5].classList.remove("active-btn");
      } else if (genre === genres[2]) {
        genre.classList.add("active-btn");
        genres[0].classList.remove("active-btn");
        genres[1].classList.remove("active-btn");
        genres[3].classList.remove("active-btn");
        genres[4].classList.remove("active-btn");
        genres[5].classList.remove("active-btn");
      } else if (genre === genres[3]) {
        genre.classList.add("active-btn");
        genres[0].classList.remove("active-btn");
        genres[1].classList.remove("active-btn");
        genres[2].classList.remove("active-btn");
        genres[4].classList.remove("active-btn");
        genres[5].classList.remove("active-btn");
      } else if (genre === genres[4]) {
        genre.classList.add("active-btn");
        genres[0].classList.remove("active-btn");
        genres[1].classList.remove("active-btn");
        genres[2].classList.remove("active-btn");
        genres[3].classList.remove("active-btn");
        genres[5].classList.remove("active-btn");
      } else if (genre === genres[5]) {
        genre.classList.add("active-btn");
        genres[0].classList.remove("active-btn");
        genres[1].classList.remove("active-btn");
        genres[2].classList.remove("active-btn");
        genres[3].classList.remove("active-btn");
        genres[4].classList.remove("active-btn");
      }

      //   Showing and hiding movies based on their genre selected:
      movies.forEach((movie) => {
        if (movie.classList.contains(genreType)) {
          movie.animate(
            [{ opacity: "0" }, { opacity: "0.5" }, { opacity: "1" }],
            {
              duration: 1000,
              fill: "forwards",
            }
          );
          movie.style.display = "block";
        } else if (genreType === "all") {
          movie.style.display = "block";
          movie.animate(
            [{ opacity: "0" }, { opacity: "0.5" }, { opacity: "1" }],
            {
              duration: 1000,
              fill: "forwards",
            }
          );
        } else {
          movie.style.display = "none";
        }
      });
    });
  });
}

filterMovies();

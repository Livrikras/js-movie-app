"use strict";
// ========== MOVIE APP - SESSION 2 ==========
// Movie objects created from HTML data

// Movie 1: Barbie
const barbieMovie = {
  id: 1,
  title: "Barbie",
  year: 2023,
  genre: ["Adventure", "Comedy", "Fantasy"],
  rating: 7.0,
  director: "Greta Gerwig",
  image: "https://upload.wikimedia.org/wikipedia/en/0/0b/Barbie_2023_poster.jpg",
  actors: ["Margot Robbie", "Ryan Gosling", "America Ferrera"],
  description:
    "Barbie and Ken embark on a journey of self-discovery after leaving the utopian Barbie Land for the real world."
};

// Movie 2: Dune
const duneMovie = {
  id: 4,
  title: "Dune",
  year: 2021,
  genre: ["Adventure", "Drama", "Sci-Fi"],
  rating: 8.0,
  director: "Denis Villeneuve",
  image: "https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg",
  actors: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac"],
  description:
    "Paul Atreides leads nomadic tribes in a battle to control the desert planet Arrakis and its valuable spice."
};

// Movie 3: Dune: Part Two
const duneTwoMovie = {
  id: 16,
  title: "Dune: Part Two",
  year: 2024,
  genre: ["Action", "Adventure", "Drama"],
  rating: 8.7,
  director: "Denis Villeneuve",
  image:
    "https://m.media-amazon.com/images/M/MV5BNTc0YmQxMjEtODI5MC00NjFiLTlkMWUtOGQ5NjFmYWUyZGJhXkEyXkFqcGc@._V1_.jpg",
  actors: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  description:
    "Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family."
};

// Tilføj resten af dine movie objekter her...
// (De objekter du oprettede i Trin 13)

console.log("✅ Movie objects loaded and ready for DOM manipulation!");

// Find movie list container (den er nu tom efter Trin 15B!)
const movieListContainer = document.querySelector("#movie-list");

// Tilføj Barbie movie DIREKTE med template string
const barbieHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${barbieMovie.poster}" 
         alt="Poster of ${barbieMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${barbieMovie.title} <span class="movie-year">(${barbieMovie.year})</span></h3>
      <p class="movie-genre">${barbieMovie.genre}</p>
      <p class="movie-rating">⭐ ${barbieMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${barbieMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", barbieHTML);
console.log("Barbie added!");

// Tilføj Dune movie DIREKTE (bemærk hvor meget du skriver igen!)
const duneHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${duneMovie.poster}" 
         alt="Poster of ${duneMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${duneMovie.title} <span class="movie-year">(${duneMovie.year})</span></h3>
      <p class="movie-genre">${duneMovie.genre}</p>
      <p class="movie-rating">⭐ ${duneMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${duneMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", duneHTML);
console.log("Dune added!");

// Tilføj Dune movie DIREKTE (bemærk hvor meget du skriver igen!)
const duneHTML = `
  <article class="movie-card" tabindex="0">
    <img src="${duneMovie.poster}" 
         alt="Poster of ${duneMovie.title}" 
         class="movie-poster" />
    <div class="movie-info">
      <h3>${duneMovie.title} <span class="movie-year">(${duneMovie.year})</span></h3>
      <p class="movie-genre">${duneMovie.genre}</p>
      <p class="movie-rating">⭐ ${duneMovie.rating}</p>
      <p class="movie-director"><strong>Director:</strong> ${duneMovie.director}</p>
    </div>
  </article>
`;

movieListContainer.insertAdjacentHTML("beforeend", duneHTML);
console.log("Dune added!");
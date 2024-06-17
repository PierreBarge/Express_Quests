const express = require("express");

const app = express();

const port = 5000;

const movies = [
  {
    id: 1,
    title: "Citizen Kane",
    director: "Orson Wells",
    year: "1941",
    color: false,
    duration: 120,
  },
  {
    id: 2,
    title: "The Godfather",
    director: "Francis Ford Coppola",
    year: "1972",
    color: true,
    duration: 180,
  },
  {
    id: 3,
    title: "Pulp Fiction",
    director: "Quentin Tarantino",
    year: "1994",
    color: true,
    duration: 180,
  },
];

const welcome = (req, res) => {
  res.send("Welcome to my favourite movie list");
};

const getMovies = (req, res) => {
  res.status(200).json(movies);
};

const getMovieById = (req, res) => {
  let wantedMovie;
  for (let movie of movies) {
    if (parseInt(movie.id) === parseInt(req.params.id)) {
      wantedMovie = movie;
    }
  }
  if (wantedMovie === undefined) {
    res.status(404).send("Not found");
  } else {
    res.status(200).json(wantedMovie);
  }
};

app.get("/", welcome);

app.get("/api/movies", getMovies);

app.get("/api/movies/:id", getMovieById);

app
  .listen(port, () => {
    console.info(`Server is listening on port ${port}`);
  })
  .on("error", (err) => {
    console.error("Error:", err.message);
  });

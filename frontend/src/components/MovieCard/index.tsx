import MovieScore from "components/MovieScore";
import React from "react";

const movie = {
  image:
    "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
  title: "The Witcher",
  description: "..",
  id: 1,

  count: 2,
  score: 4.5,
};

function MovieCard() {
  return (
    <div>
      <img
        src={movie.image}
        className="dsmovie-movie-card-image"
        alt={movie.description}
      />
      <div className="dsmovie-card-bottom-container">
        <h3>{movie.title}</h3>
        <MovieScore />
        <div className="btn btn-primary dsmovie-btn">Avaliar</div>
      </div>
    </div>
  );
}
export default MovieCard;

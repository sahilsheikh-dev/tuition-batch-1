import React from "react";
import "./MovieCardComponents.css";

function MovieCardComponents({ id, img, title, overview }) {
  return (
    <>
      <div className="movie-card">
        <img className="movie-poster" src={img} alt={title} />
        <div className="movie-info">
          <h1 className="movie-title">{title}</h1>
          <p className="movie-overview">{overview}</p>
          <a className="movie-btn" href={"/movieDetails/" + id}>
            View More
          </a>
        </div>
      </div>
    </>
  );
}

export default MovieCardComponents;

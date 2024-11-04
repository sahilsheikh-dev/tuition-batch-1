import React, { useEffect, useState } from "react";
import MovieCardComponents from "../movieCardComponents/MovieCardComponents";

function MovieListComponent() {
  const [populatMoviesData, setPopulatMoviesData] = useState([]);

  function getPopulatMovies() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGZhYzBmOTEyOWU3YjY3ZTdhZTI5Nzk3ZjRjNWQ3NyIsIm5iZiI6MTcyODYwNzQwMy40Njg4OTMsInN1YiI6IjY2ZmRlNTE0OWViZWExOTAwNmY3YmE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cEpDQgXEZTyEO-2kgcYFSPHE_0Jd3TLIgKckqtWGbeI",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPopulatMoviesData(data.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getPopulatMovies();
  }, []);

  return (
    <>
      <h1 style={{ textAlign: "center", fontSize: "50px" }}>Popular Movies</h1>
      <div
        className="movies-list"
        style={{ display: "grid", gridTemplateColumns: "auto auto auto auto" }}
      >
        {populatMoviesData?.map((movie, key) => (
          <MovieCardComponents
            key={key}
            id={movie.id}
            img={
              "https://media.themoviedb.org/t/p/w220_and_h330_face/" +
              movie.poster_path
            }
            title={movie.title}
            overview={movie.overview}
          />
        ))}
      </div>
    </>
  );
}

export default MovieListComponent;

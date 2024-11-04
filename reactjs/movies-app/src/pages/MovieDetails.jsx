import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeroSectionComponent from "../components/movieDetailsComponents/heroSectionComponent/HeroSectionComponent";

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetail, setMovieDetail] = useState({});

  function findMovieById() {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZGZhYzBmOTEyOWU3YjY3ZTdhZTI5Nzk3ZjRjNWQ3NyIsIm5iZiI6MTcyODYwNzQwMy40Njg4OTMsInN1YiI6IjY2ZmRlNTE0OWViZWExOTAwNmY3YmE1NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cEpDQgXEZTyEO-2kgcYFSPHE_0Jd3TLIgKckqtWGbeI",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/" + movieId + "?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovieDetail(data);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    findMovieById();
  }, []);

  return (
    <>
      <div>
        <HeroSectionComponent
          title={movieDetail.original_title}
          overview={movieDetail.overview}
          popularity={movieDetail.popularity}
          img={movieDetail.poster_path}
          spokenLanguages={movieDetail.spoken_languages}
          voteAverage={movieDetail.vote_average}
        />
      </div>
    </>
  );
}

export default MovieDetails;

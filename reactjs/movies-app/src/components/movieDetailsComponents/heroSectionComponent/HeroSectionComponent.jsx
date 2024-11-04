import React from "react";

function HeroSectionComponent({
  title,
  overview,
  voteAverage,
  img,
  spokenLanguages,
}) {
  return (
    <>
      <div>
        <img
          src={"https://media.themoviedb.org/t/p/w300_and_h450_bestv2/" + img}
          alt={title}
        />
        <div>
          <h1>{title}</h1>
          <h2>Ratings: {voteAverage}/10</h2>
          <p>{overview}</p>

          <h1>Spoken Languages</h1>
          {spokenLanguages?.map((lang, key) => (
            <p key={key}>{lang.name}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export default HeroSectionComponent;

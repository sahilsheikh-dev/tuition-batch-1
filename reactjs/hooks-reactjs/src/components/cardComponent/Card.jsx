import React from "react";

function Card({ title, subtitle }) {
  return (
    <>
      <div>
        <h1>External</h1>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
    </>
  );
}

export default Card;

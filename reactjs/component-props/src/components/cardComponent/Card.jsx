import React from "react";
import "./Card.css";
import Button from "../buttonComponent/Button";

function Card({ img, heading, subHeading, description, btnText }) {
  return (
    <>
      <div className="card">
        <img className="card-img" src={img} />
        <h1 className="card-heading">{heading}</h1>
        <h4 className="card-subheading">{subHeading}</h4>
        <p className="card-description">{description}</p>
        <Button text={btnText} />
      </div>
    </>
  );
}

export default Card;

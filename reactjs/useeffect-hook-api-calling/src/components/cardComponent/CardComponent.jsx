import React from "react";

const CardComponent = ({ imgUrl, name, email }) => {
  return (
    <>
      <div
        style={{
          width: "100%",
          textAlign: "center",
        }}
      >
        <img src={imgUrl} alt={name} />
        <h1>{name}</h1>
        <h2>{email}</h2>
      </div>
    </>
  );
};

export default CardComponent;

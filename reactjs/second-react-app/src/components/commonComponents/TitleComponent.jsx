import React from "react";
import Button from "./Button";
// props
function TitleComponent({ imgSource, title, subtitle, buttonText }) {
  return (
    <>
      <div
        style={{
          background: "blue",
          color: "white",
          padding: "10px",
          margin: "10px",
        }}
      >
        <img src={imgSource} width={"50px"} height={"50px"} />
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <Button text={buttonText} />
      </div>
    </>
  );
}

export default TitleComponent;

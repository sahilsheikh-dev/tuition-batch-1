import React from "react";
import NavBar from "../components/commonComponents/navBarComponent/NavBar";
import { useParams } from "react-router-dom";

function AboutUs() {
  const { id } = useParams();

  return (
    <>
      <div>AboutUs</div>
      <br />
      <br />
      <br />
      <h1>{id}</h1>
    </>
  );
}

export default AboutUs;

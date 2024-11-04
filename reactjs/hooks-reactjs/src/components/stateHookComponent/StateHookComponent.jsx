import React from "react";
import { useState } from "react";

function StateHookComponent() {
  const [name, setName] = useState("Sahil");
  const [age, setAge] = useState(25);

  function updateValues() {
    setName("Owais");
    setAge(26);
  }

  return (
    <>
      <h3>State Hook Example</h3>
      <p>My name is {name}</p>
      <p>My Age is {age}</p>
      <button onClick={() => updateValues()}>Update State</button>
    </>
  );
}

export default StateHookComponent;

import React from "react";
import { useState } from "react";

function SumComponent() {
  const [name, setName] = useState("");
  const [display, setDisplay] = useState("");

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  function addition() {
    setDisplay(name);
    setSum(parseInt(num1) + parseInt(num2));
  }

  return (
    <>
      <h3>State Hook Example</h3>

      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <br />
      <input
        type="number"
        id="num1"
        onChange={(e) => setNum1(e.target.value)}
        placeholder="num1"
      />
      <br />
      <input
        type="number"
        id="num2"
        onChange={(e) => setNum2(e.target.value)}
        placeholder="num2"
      />

      <br />
      <p>my name is {display}</p>
      <p>addition of 2 number is {sum}</p>
      <button onClick={() => addition()}>Add two numbers</button>
    </>
  );
}

export default SumComponent;

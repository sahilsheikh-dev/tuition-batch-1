import React, { useEffect, useState } from "react";

function UseEffectComponent() {
  //   const [theme, setTheme] = useState("DARK");
  const [theme, setTheme] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    // alert("Welcome to the react project");

    setTheme("LIGHT");

    setText("Default Text");

    console.log("Use Effect Hook Called");
  }, []);

  function changeText() {
    setText(window.crypto.randomUUID());
  }

  function changeTheme() {
    if (theme == "DARK") {
      setTheme("LIGHT");
    } else {
      setTheme("DARK");
    }
  }

  return (
    <>
      <h1>Current Theme is {theme}</h1>
      <button onClick={() => changeTheme()}>Change Theme</button>
      <hr />

      <h1>text {text}</h1>
      <button onClick={() => changeText()}>Change Text</button>
    </>
  );
}

export default UseEffectComponent;

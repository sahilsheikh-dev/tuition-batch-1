import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Homepage from "./pages/Homepage";
import AboutPage from "./pages/AboutPage";
import Button from "./components/commonComponents/Button";
import TitleComponent from "./components/commonComponents/TitleComponent";

function App() {
  return (
    <>
      <Button text={"App Button"} />
      <Homepage />
      <AboutPage />
      <hr />

      <TitleComponent
        imgSource={
          "https://static-00.iconduck.com/assets.00/settings-icon-2048x2046-cw28eevx.png"
        }
        title={"Settings"}
        subtitle={"Menu for your account"}
        buttonText={"Go to Settings"}
      />

      <TitleComponent
        imgSource={"https://cdn-icons-png.flaticon.com/512/2175/2175193.png"}
        title={"Facebook"}
        subtitle={"My Facebook account"}
        buttonText={"Go to Facebook"}
      />
    </>
  );
}

export default App;

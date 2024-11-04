import React from "react";
import StateHookComponent from "../components/stateHookComponent/stateHookComponent";
import SumComponent from "../components/stateHookComponent/SumComponent";

function Homepage() {
  return (
    <>
      <h1>Hooks</h1>
      <ol>
        <li>useState</li>
        <li>useEffect</li>
      </ol>

      {/* <StateHookComponent /> */}
      <SumComponent />
    </>
  );
}

export default Homepage;

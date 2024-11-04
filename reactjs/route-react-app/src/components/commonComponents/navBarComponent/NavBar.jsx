import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <>
      <div>
        <div className="topnav">
          <a className="active" href="/">
            Home
          </a>
          <a href="/">Homepage</a>
          <a href="/contact">Contact</a>
          <a href="/about/684195151">About</a>
        </div>
      </div>
    </>
  );
}

export default NavBar;

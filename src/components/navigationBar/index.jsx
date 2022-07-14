import React from "react";
import "./navigation.sass";

function NavigationBar() {
  return (
    <div className="nav">
      <div className="nav__content">
        <h1 className="nav__title">Text to Speech</h1>
        <p className="nav__subtitle">Quickly covert words into sound</p>
      </div>

      <button type="button" className="nav__loginBtn">
        Login
      </button>
    </div>
  );
}

export default NavigationBar;

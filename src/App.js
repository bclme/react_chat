import React from "react";
import "./style.css";

export const Desktop = () => {
  return (
    <div className="desktop">
      <div className="overlap-group-wrapper">
        <div className="overlap-group">
          <div className="rectangle" />
          <div className="div" />
          <div className="frame">
            <div className="text-wrapper">Upload CV</div>
          </div>
          <div className="rectangle-2" />
          <div className="rectangle-wrapper">
            <div className="rectangle-3" />
          </div>
          <div className="rectangle-4" />
          <div className="rectangle-5" />
          <img className="polygon" alt="Polygon" src="polygon-1.svg" />
          <div className="rectangle-6" />
          <div className="rectangle-7" />
          <p className="p">Hello, are you looking for a job?</p>
          <div className="text-wrapper-2">Yes!</div>
          <div className="input">
            <div className="text-wrapper-3">Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Desktop />
    </div>
  );
}

export default App;

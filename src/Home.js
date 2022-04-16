import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

export default function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Welcome to Our Website</h1>
        <ul className="list">
          <button className="optionsbtn">
            <Link to="/screen1" className="link">
              Screen1
            </Link>
          </button>
          <button className="optionsbtn">
            <Link to="/screen2" className="link">
              Screen2
            </Link>
          </button>
        </ul>
      </header>
    </div>
  );
}

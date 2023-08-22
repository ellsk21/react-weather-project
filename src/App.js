import React from "react";
import Weather from "./Weather"
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
     
      <Weather defaultCity="Mangawhai" />
      <footer>
        This project is by Ellie Korth and is open source coded on <a href="https://github.com/ellsk21/react-project" target="_blank">Github</a></footer>
        </div>
    </div>

  );
}



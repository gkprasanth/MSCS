import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

import MapChart from "./MapChart";

function App() {
  return (
    <div style={{ position: "relative" }}>
      <MapChart style={{ position: "relative" }} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

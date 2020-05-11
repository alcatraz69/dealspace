import React from "react";
import "./App.css";
import Header from "./compnents/header/Header";
import Searchbar from "./compnents/Searchbar/Searchbar";
import Section1 from "./compnents/Section1/Section1";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Section1 />
    </div>
  );
}

export default App;

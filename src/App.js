import React from "react";
import "./App.css";
import Header from "./compnents/Header";
import Searchbar from "./compnents/Searchbar";
import Section1 from "./compnents/Section1";

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

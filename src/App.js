import React from "react";
import "./App.css";
import Header from "./compnents/header/Header";
import Searchbar from "./compnents/Searchbar/Searchbar";
import Section1 from "./compnents/Section1/Section1";
import Form from "./compnents/Form/Form";

function App() {
  return (
    <div className="App">
      <Header />
      <Searchbar />
      <Section1 video="false" title="Trending Startups" />
      <Section1 video="true" title="1-min Video Startup Pitches" />
      <Form />
    </div>
  );
}

export default App;

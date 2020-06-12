import React from "react";
import "./App.css";
import Recommendations from "./Components/News/News";
import Nav from "./Components/Nav/Nav";
import Search from "./Components/Search/Search";
import Banners from "./Components/Banners/Banners";
import Recomendation from "./Components/Recomendation/Recomendation.js";
function App() {
  return (
    <div className="App">
      <div className="container">
        <Recommendations />
        <Nav />
      </div>
      <Search />
      <div className="container">
        <Banners />
        <Recomendation />
      </div>
    </div>
  );
}

export default App;

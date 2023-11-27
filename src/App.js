import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./Home.js";
import Soda from "./Soda.js";
import Chips from "./Chips.js";
import Sardine from "./Sardine.js";
import NavBar from "./NavBar.js";

function App() {
  return (
    <div className="App">
      <h1>React Routes</h1>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/soda" element={<Soda />}></Route>
          <Route path="/chips" element={<Chips />}></Route>
          <Route path="/sardine" element={<Sardine />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
// Components & pages
import Home from "./pages/GameHome";
import Nav from "./components/GameNav";
//Styles
import GlobalStyles from "./components/GameGlobalStyles";
//Routes
import { Route, Routes } from "react-router-dom";

function GameApp() {
  return (
    <div className="App">
      <GlobalStyles />
      <Nav />
      <Routes>
        <Route path="/gamechanger/" element={<Home />}></Route>
        <Route path="/gamechanger/:id" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default GameApp;

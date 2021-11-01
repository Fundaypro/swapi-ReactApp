import React, { useState } from "react";
import "./App.css";
import MainMenu from "./components/menu";
import CharacterContent from "./components/CharactersContent";
import PlanetsContent from "./components/PlanetsContent";
import { useSelector } from "react-redux";


function App() {
  const window = useSelector((state)=>state.menu.contentWindow);


  return (
    <div className="App">
      <div className="swapiHead">
        <h1 className="swapiHeadText">My SWAPI homework</h1>
        <MainMenu/>
      </div>
      <div className="contentDiv">
        {window === 1 ? (
          <CharacterContent />
        ) : window === 2 ?  (
          <PlanetsContent/>
          
        ): null }
      </div>
    </div>
  );
}

export default App;

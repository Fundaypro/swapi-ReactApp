import React, {useState} from 'react';
import './App.css';
import MainMenu from "./components/menu"
import CharacterContent from './components/CharactersContent'
import PlanetsContent from './components/PlanetsContent'








function App() {
  
  const [contentState, setcontentState] = useState(<CharacterContent />);
  
  return (
    <div className="App">
      <div className="swapiHead">
        <h1 className="swapiHeadText">my SWAPI homework</h1>
        <MainMenu state={setcontentState}/>
      </div>
      <div className="contentDiv">
        {contentState}
      </div>
    </div>
    
  );
}


export default App; 
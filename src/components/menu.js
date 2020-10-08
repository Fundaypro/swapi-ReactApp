import React, {useState} from 'react'
import CharacterContent from './CharactersContent';
import PlanetsContent from './PlanetsContent';

function MainMenu(props) {

  
let menuItems =[
  {
    id:1,
    text: 'Characterts'
  },
  {
    id:2,
    text: 'Planets'
  }
] 
      

return (
  <ul>
    {menuItems.map(menuItems => 
      <li key={menuItems.id}>
        <button value={menuItems.id} className="menuButton" onClick={(e)=>{
          if (e.target.innerText === 'Planets') props.state(<PlanetsContent/>);
          if (e.target.innerText === 'Characterts') props.state(<CharacterContent/>)
        }}>
        {menuItems.text}
        </button>
      </li>)}
  </ul>
      )
  };

export default MainMenu;


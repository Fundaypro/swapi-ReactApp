import React from 'react'
import { useDispatch } from 'react-redux';
import { changeWindow } from '../features/MenuSlice';


function MainMenu() {
const dispatch = useDispatch()
const menuItems =[
  {
    id:1,
    text: 'Characterts'
  },
  {
    id:2,
    text: 'Planets',
  }
] 
  

return (
  <ul>
    {menuItems.map(menuItems => 
      <li key={menuItems.id}>
        <button value={menuItems.id} className="menuButton" onClick={()=>{
      dispatch(changeWindow(menuItems.id))
    }}>
        {menuItems.text}
        </button>
      </li>)}
  </ul>
      )
  };

export default MainMenu;


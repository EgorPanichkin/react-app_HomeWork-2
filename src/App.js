import React, { useState } from 'react'
import './App.css';

function App() {
  const red = {
    backgroundColor: 'red'
  }

  const blue = {
    backgroundColor: 'blue'
  }

  const [colors, setColors] = useState([red, blue])

  function handleClick() {
    setColors([colors[0], colors[1]] = [colors[1], colors[0]])
  }


  return (
    <div className='container'>
      <Square color={colors[0]} onClick={handleClick}/> 
      <Square color={colors[1]} onClick={handleClick}/>
    </div>
  );
}
export default App;

function Square( { onClick, color } ) {

  return (
    <div style={ color } className='square' onClick={onClick}></div>
  )
}

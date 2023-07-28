import React, { useState } from 'react';
import './styles.css';
import Start from './Components/Start';
import Quiz from './Components/Quiz';

function App() {
  const [display, setDisplay] = useState(true);
  
  const menu = {
      display: display ? "initial" : "none"
  }

  const game = {
    display: display ? "none" : "initial"
}

  function changeDisplay() {
    setDisplay(false)
}

  return (
    <main className="App">
      <Start display={display} style={menu} toggle={changeDisplay} />
      <Quiz display={display} style={game} />
    </main>
  );
}

export default App;

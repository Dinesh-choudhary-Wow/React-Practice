import './App.css';
import Button from './Button'
// import React, { useState } from 'react';
/*
function App() {
  const [num, setNum] = useState(1);
  function increment() {
    setNum(num + 1);
  }

  function decrement() {
    setNum(num - 1);
  }

  return (
    <div className="App">
      <h2 style={{ textAlign: 'center', fontSize: 100 }}>Counter</h2>
      <h1 className='counter' style={{ fontSize: 100 }} >{num}</h1>
      <div className="buttons">
        <button className="btn" onClick={increment}>Increment</button>
        <button className="btn" onClick={decrement}>Decrement</button>
      </div>
    </div>
  )
};
*/

function App(){
  return (
    <div className="App">
      <h1>Hello</h1>
      <Button />

    </div>
  )
}


export default App;
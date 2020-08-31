import React from 'react';
// import logo from './logo.svg';
import logo from './images/dirttherapy.tklogov1.png'
import './App.css';

function App() {
  return (
    <div className="App">


      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p id="openingText" >
          Dirt Therapy TK is a project covering some of the things I do to make it through the day.
        </p>

        <p id="comeAlong">
          I don't know exactly where it will go, but you're welcome to come along for the ride.
          </p>

      </header>
    </div>
  );
}

export default App;

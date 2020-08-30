import React from 'react';
// import logo from './logo.svg';
import logo from './images/dirttherapy.tklogov1.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dirt Therapy TK is a project covering some of the things I do to make it through the day.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          I don't know exactly where it will go, but you're welcome to come along for the ride.
        </a>
      </header>
    </div>
  );
}

export default App;

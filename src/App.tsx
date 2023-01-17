import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

// import fetch from 'node-fetch';


async function makeReq(){
  const response = await axios("http://localhost:3000");
  console.log(response.status);
}

function App() {
  // const response = await axios("http://localhost:3000");

  // console.log(response);
  makeReq()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Count } from './Components/Count';
import { GithubUserDetails } from './Components/GithubUserDetails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
        <GithubUserDetails />
      </header>
    </div>
  );
}

export default App;

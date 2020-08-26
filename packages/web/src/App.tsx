import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import {User} from './types'

import LoginButton from './Login/LoginButton'

function App() {
  const[user, setUser] : [ User | null, (arg: User | null) => void] = useState<User | null>(null)

  return (
    <div className="App">
      <header className="App-header">
        <div>{ user ? user.username : null }</div>

        <LoginButton setUser={setUser}/>
       
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

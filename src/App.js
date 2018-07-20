import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import FloatingButton from './components/FloatingButton';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">Welcome to React</h1>
    </header>
    <Box title="Test box" bgColor="#61da00" />
    <Box title="Test box" bgColor="#61dafb">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
      </p>
      <Box title="Inside box" />
      <FloatingButton>
        Cliques sur moi !
      </FloatingButton>
    </Box>
    <FloatingButton>
      Non, cliques sur moi !
    </FloatingButton>
  </div>
);

export default App;

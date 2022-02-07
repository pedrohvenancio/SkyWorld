import './App.css';
import Header from './Components/header/header';
import React from 'react';
import About from './Components/about/about';
import Links from './Components/links/links';
import Main from './Components/main/main';

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Links />
      <Main />

    </div>
  );
}

export default App;

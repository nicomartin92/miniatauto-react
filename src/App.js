import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

// import logo from '../../assets/logo.svg';
import './components/App/App.scss';

/* <img src={logo} className="App-logo" alt="logo" /> */

function App() {
  return (
    <div className="App">
      <Header />

      <div className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>

      <Footer />
    </div>
  );
}

export default App;

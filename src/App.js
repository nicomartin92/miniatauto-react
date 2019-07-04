import React from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import TodoItem from './components/TodoItem/TodoItem';
import Card from './components/Card/Card';

// import logo from '../../assets/logo.svg';
import './components/App/App.scss';

/* <img src={logo} className="App-logo" alt="logo" /> */

const App = () => {
  return (
    <div className="App">
      <Header />

      <TodoItem></TodoItem>

      <Card list={{ title: "Peugeot 2008 1", imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161635/config/111991/peugeot-2008-1906pc-129.jpg", view: "side"}}
      ></Card>

      <Card list={{ title: "Peugeot 2008 2", imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161636/config/111992/peugeot-2008-1906pc-126.jpg", view: "rear"}} 
      ></Card>

      <Card list={{ title: "Peugeot 2008 3", imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/163239/config/112119/la-longueur-augmente-de-14-cm-pour-atteindre-430-m.jpg", view: "front"}} 
      ></Card>

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

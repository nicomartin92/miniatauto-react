import React, {Component} from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Card from './components/Card/Card';

/* Datas */
import carsData from './db';

import './components/App/App.scss';
// import logo from '../../assets/logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

class App extends Component {
  constructor() {
    super()
    this.state = {
      carsDataFromState: carsData,
      answer: "Ottomobile",
      isLogged: true,
      stock: 0
    }
    this.countStock = this.countStock.bind(this)
  }

  countStock(id) {
    console.warn('changed id ', id);

    this.setState(prevState => {
      const updatedStock = prevState.carsDataFromState.map(item => {
        console.warn('prev stock ', item.stock);

        if (item.id === id) {
          item.stock = (item.stock - 1)
          if (item.stock <= 0) {
            item.stock = 0
          }
          console.warn('new stock ', item.stock)
        }
        return item
      })
      return {
        carsDataFromState: updatedStock
      }
    })
    
    /* this.setState(prevState => {
      return {
        likes: prevState.likes + 1
      }
    }); */
  }
  
  render() {
    const carsItems = this.state.carsDataFromState.map(item => <Card
      countStock={this.countStock}
      answer={this.state.answer}
      key={item.id}
      item={item} />);

    let worldDisplay;
    if (this.state.isLogged) {
      worldDisplay = 'vrai';
    } else {
      worldDisplay = 'faux';
    }

    return (
      <div className="App">
        <Header />

        <h1>Marsque principale ? {this.state.answer}</h1>
        <h2>Utilisateur est connecté: {worldDisplay}</h2>
        <p>Likes: {this.state.likes}</p>
        <button onClick={this.countLikes}>Like</button>
  
        <div className="listContainer">
          {carsItems}
        </div>
  
        {/* <div className="listContainer">
          <Card list={{ title: "Peugeot 2008 1", 
                        imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161635/config/111991/peugeot-2008-1906pc-129.jpg", 
                        view: "side",
                        year: "2019"}}
          ></Card>
  
          <Card list={{ title: "Peugeot 2008 2", 
                        imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161636/config/111992/peugeot-2008-1906pc-126.jpg", 
                        view: "rear",
                        year: ""}} 
          ></Card>
  
          <Card list={{ title: "Peugeot 2008 3", 
                        imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/163239/config/112119/la-longueur-augmente-de-14-cm-pour-atteindre-430-m.jpg", 
                        view: "front"}} 
          ></Card>
  
          
          <Card list={{ title: "Renault Captur 1", 
                        imgUrl: "https://img.autoplus.fr/news/2019/07/03/1540178/1200%7C800%7C5c4c8832137f48d852a5d73d.jpg", 
                        view: "side",
                        year: "2019"}}
          ></Card>
  
          <Card list={{ title: "Renault Captur 2", 
                        imgUrl: "https://img.autoplus.fr/picture/renault/captur/1540159/Renault_Captur_2019_68b36-1200-800.jpg", 
                        view: "rear",
                        year: ""}} 
          ></Card>
  
          <Card list={{ title: "Renault Captur 3", 
                        imgUrl: "https://img.autoplus.fr/picture/renault/captur/1540159/Renault_Captur_2019_03b29-1200-800.jpg", 
                        view: "front"}} 
          ></Card>
        </div> */}
        
  
        <div className="App-header">
          
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
    ) 
  }
}

export default App;

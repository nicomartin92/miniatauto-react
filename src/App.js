import React, {Component} from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';

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
      stock: 0,
      isLoading: true,
      loadingDelay: 1500,
      carsDataJsonFromState: {},
      repos: [],
      requestFailed: false,
      data: {}
    }
    this.countStock = this.countStock.bind(this)
  }

  countStock(id) {
    this.setState(prevState => {
      const updatedStock = prevState.carsDataFromState.map(item => {
        if (item.id === id) {
          item.stock = (item.stock - 1)
          if (item.stock <= 0 || item.stock === isNaN) {
            item.stock = 0
            item.available = !item.available
          }
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

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, this.state.loadingDelay);

  /* fetching API */
    this.setState({ isLoading: false })
    
    //fetch('http://localhost:3003/cars')
    /* fetch('https://swapi.co/api/people/1/')
      .then(response => response.json())
      .then(data => {
        this.setState({
          isLoading: false,
          carsDataJsonFromState: data
        })
      }); */
    
    fetch('https://randomuser.me/api/')
    //fetch('http://localhost:3003/cars')
    .then((response) => {
      return response.json()
    }).then((d) =>  {
      console.warn('ok ggggggggggggggggggggg', d)
      this.setState({
            data: d
      });
    })
  }
  
  render() {
    const carsItems = this.state.carsDataFromState.map(item => <List
      isLoading={this.state.isLoading}
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

    if(this.state.requestFailed) return <p>Request failed.</p>
    if(!this.state.data) return <p>Loading</p>

    return (
      <div className="App">
        <Header />

        <div className="main">

        {this.state.answer}

          <h1>Marque principale ? {this.state.answer}</h1>
          <h2>Utilisateur est connecté: {worldDisplay}</h2>

          <div className="list">
            <ul className="list__wrapper">
              {carsItems}
            </ul>
          </div>
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
        
  
        {/* <div className="App-header">
          
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
      </div> */}
  
        <Footer />
      </div>
    ) 
  }
}

export default App;

import React, {Component} from 'react';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import List from './components/List/List';
// import Post from './components/Post/Post';

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
      carsD: [],
      error: null,
      loadingDelay: 1500,
      carsDataJsonFromState: [],
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
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, this.state.loadingDelay);

  /* fetching API */
    this.setState({ isLoading: false })

    // this.fetchPosts();

    fetch('http://localhost:3003/cars')
      .then(res => res.json())
      .then((data) => {
        this.setState({ carsDataJsonFromState: data })
        console.warn(this.state.carsDataJsonFromState)
      })
      .catch(console.log)
  }
  
  render() {
    /* from Array */
    const carsItems = this.state.carsDataFromState.map(item => <List
      isLoading={this.state.isLoading}
      countStock={this.countStock}
      answer={this.state.answer}
      key={item.id}
      item={item} />);
    
    const carsItemsFromJson = this.state.carsDataFromState.map(item => <List
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
    if (!this.state.data) return <p>Loading</p>

    /* {!isLoading ?
    Object.keys(carsD).map(key => <Post key={key} body={carsD[key]} />) :
    <h3>Loading...</h3>} */

    return (
      <div className="App">
        <Header />

        <div className="main">

          <div className="list">
            <ul className="list__wrapper">
              {carsItemsFromJson}
            </ul>
          </div>
          
          
          {this.state.carsDataJsonFromState.map((car) => (
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{car.brand}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                { car.brand &&
                  <span>
                  Completed
                  </span>
                }
                { !car.content &&
                  <span>
                    Pending
                  </span>
                }              
                </h6>
              </div>
            </div>
          ))}
          
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
  
        <Footer />
      </div>
    ) 
  }
}

export default App;

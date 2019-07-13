import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

/* Components */
import List from './components/List/List';

/* Datas */
import carsData from './db';

/* Styles */
import './components/App/App.scss';
// import logo from '../../assets/logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

/* Pages */
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import WhishlistPage from './pages/WhishlistPage';
import UserPage from './pages/UserPage';
import ErrorPage from './pages/ErrorPage';

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
    
    this.setState({ isLoading: false })

    /* fetching API from Json */
    fetch('http://localhost:3003/cars')
      .then(res => res.json())
      .then((data) => {
        this.setState({
          carsDataJsonFromState: data
        })
        console.warn(this.state.carsDataJsonFromState)
      })
      .catch(console.log)
  }
  
  render() {

    /* from Array */
    const carsItems = this.state.carsDataFromState.map(item => <List
      isLoading={this.state.isLoading}
      countStock={this.countStock}
      key={item.id}
      item={item} />);
    
    /* from Json */
    const carsItemsFromJson = this.state.carsDataFromState.map(item => <List
        isLoading={this.state.isLoading}
        countStock={this.countStock}
        key={item.id}
        item={item} />);

    /* Word display */
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
        <Router>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/list" component={ListPage} exact />
            <Route path="/whishlist" component={WhishlistPage} exact />
            <Route path="/User" component={UserPage} exact />
            <Route path="/error" component={ErrorPage} exact />
            <Redirect to='/404' />
          </Switch> 
        </Router>

        <div className="main">

          <h2>Cars display from Json</h2>

          <div className="list">
            <ul className="list__wrapper">
              {carsItemsFromJson}
            </ul>
          </div>
          
          <h2>Cars display from Json with direct node</h2>

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

          <h2>Cars display from Array</h2>

          <div className="list">
            <ul className="list__wrapper">
              {carsItems}
            </ul>
          </div>

          <h2>Cars display with props</h2>

          {/* <div className="listContainer">
            <Card list={{ title: "Peugeot 2008 1", 
                          imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161635/config/111991/peugeot-2008-1906pc-129.jpg", 
                          view: "side",
                          year: "2019"}}
            ></Card>
              </div> */}
          
          {this.state.answer}

          <h1>Marque principale ? {this.state.answer}</h1>
          <h2>Utilisateur est connecté: {worldDisplay}</h2>

        </div>

      </div>
    ) 
  }
}

export default App;

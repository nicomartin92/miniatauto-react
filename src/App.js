import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';

/* Styles */
import './components/App/App.scss';
// import logo from '../../assets/logo.svg';
/* <img src={logo} className="App-logo" alt="logo" /> */

/* Pages */
import MainPage from './pages/MainPage';
import ListPage from './pages/ListPage';
import WhishlistPage from './pages/WhishlistPage';
import CarPage from './pages/CarPage';
import ErrorPage from './pages/ErrorPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/list" component={ListPage} exact />
            <Route path="/whishlist" component={WhishlistPage} exact />
            <Route path="/Car/:id" component={CarPage} />
            <Route path="/error" component={ErrorPage} exact />
            <Redirect to='/404' />
          </Switch> 
        </Router>
      </div>
    ) 
  }
}

export default App;

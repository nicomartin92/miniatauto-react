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
import StatusPage from './pages/StatusPage';
import CarPage from './pages/CarPage';
import ErrorPage from './pages/ErrorPage';
import ProjectDetails from './components/Projects/ProjectDetails';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import CreateProject from './components/Projects/CreateProject';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={MainPage} exact />
            <Route path="/list" component={ListPage} exact />
            <Route path="/whishlist" component={WhishlistPage} exact />
            <Route path="/status" component={StatusPage} exact />
            <Route path="/Car/:id" component={CarPage} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
            <Route path="/create" component={CreateProject} />
            <Route path="/error" component={ErrorPage} exact />
            <Redirect to='/404' />
          </Switch>
        </Router>
      </div>
    )
  }
}

export default App;

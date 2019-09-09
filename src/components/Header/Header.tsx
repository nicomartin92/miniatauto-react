import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import PubSub from 'pubsub-js';
// import SignInLinks from './SignInLinks';
// import SignOutLinks from './SignOutLinks';

/* SVG */
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

import './Header.scss';

class Headers extends Component {

    handleClick() {
        PubSub.publish('open:panelNav', true);
    }

    triggerSearch() {
        PubSub.publish('open:search', true);
    }

    render() {
        return (
            <header>
                <nav 
                    style={{ color: '#000000' }}>
                    <Route>
                        <ul className="nav">
                            <li>
                                <button onClick={this.handleClick}>Cars</button>
                            </li>
                            {/* <li>
                                <NavLink exact={true} to="/" activeClassName="-active">Accueil</NavLink>
                            </li> */}
                            <li>
                                <NavLink to="/list" activeClassName="-active">Catégorie</NavLink>
                            </li>
                            <li>
                                <NavLink to="/whishlist" activeClassName="-active">Whishlist</NavLink>
                            </li>
                            <li>
                                <NavLink to="/status" activeClassName="-active">Status</NavLink>
                            </li>
                            <li onClick={this.triggerSearch}>
                                <button>
                                    <SearchIcon />
                                </button>
                            </li>
                            {/* <SignInLinks />
                            <SignOutLinks /> */}
                        </ul>
                    </Route>
                </nav>
            </header>
        )
    }
}

export default Headers;
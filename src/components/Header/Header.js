import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PubSub from 'pubsub-js';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

import './Header.scss';

class Headers extends Component {

    handleClick() {
        PubSub.publish('open:panelNav');
    }

    triggerSearch() {
        PubSub.publish('open:search');
    }

    render() {
        return (
            <header>
                <nav className="nav"
                    style={{ color: '#000000' }}>
                    <li>
                        <button onClick={this.handleClick}>Cars</button>
                    </li>
                    <li>
                        <NavLink exact={true} to="/" activeClassName="-active">Accueil</NavLink>
                    </li>
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
                        <button>search</button>
                    </li>
                    <li>
                        <SignInLinks />
                    </li>
                    <li>
                        <SignOutLinks />
                    </li>
                </nav>
                
            </header>
        )
    }
}

export default Headers;
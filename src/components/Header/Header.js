import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import PubSub from 'pubsub-js'

import './Header.scss';

class Headers extends Component {

    handleClick() {
        console.warn('send');
        PubSub.publish('world');
    }

    render() {
        return (
            <header className="nav"
                style={{ color: '#000000' }}>
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
                    <NavLink to="/user" activeClassName="-active">User</NavLink>
                </li>
                <li>
                    <button onClick={this.handleClick}>Pass</button>  
                </li>
            </header>
        )
    }
}

export default Headers;
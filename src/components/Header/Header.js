import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

const Headers = () => {
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
        </header>
    )
}

export default Headers;
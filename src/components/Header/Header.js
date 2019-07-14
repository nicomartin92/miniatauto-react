import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Headers = () => {
    return (
        <header className="nav"
            style={{ color: '#000000' }}>
            <li>
                <Link to="/">Accueil</Link>
            </li>
            <li>
                <Link to="/list" exact>Catégorie</Link>
            </li>  
            <li>
                <Link to="/whishlist">Whishlist</Link>
            </li>
            <li>
                <Link to="/user">User</Link>
            </li>
        </header>
    )
}

export default Headers;
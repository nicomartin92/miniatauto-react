import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

const Headers = () => {
    return (
        <header className="nav"
            style={{ color: '#000000' }}>
            <Link to="/">Accueil</Link>
            <Link to="/list">Catégorie</Link>
            <Link to="/whishlist">Whishlist</Link>
            <Link to="/user">User</Link>
        </header>
    )
}

export default Headers;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class SignInLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li>
                    <NavLink to='/create' >New Project</NavLink>
                    <NavLink to='/' >Log out</NavLink>
                    <NavLink to='/' className="btn btn-floating pink lighten-1">NM</NavLink>
                </li>
            </ul>
        )
    }
}

export default SignInLinks;
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class SignOutLinks extends Component {
    render() {
        return (
            <li>
                <NavLink to='/signup' >Sign up</NavLink>
                <NavLink to='/signin' >Log in</NavLink>
            </li>
        )
    }
}

export default SignOutLinks;
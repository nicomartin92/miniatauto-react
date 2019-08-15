import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class SignOutLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li>
                    <NavLink to='/signup' >Sign up</NavLink>
                    <NavLink to='/signin' >Log in</NavLink>
                </li>
            </ul>
        )
    }
}

export default SignOutLinks;
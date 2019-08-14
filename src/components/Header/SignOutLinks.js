import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class SignOutLinks extends Component {
    render() {
        return (
            <ul className="right">
                <li>
                    <NavLink to='/' >Sign up</NavLink>
                    <NavLink to='/' >Log in</NavLink>
                </li>
            </ul>
        )
    }
}

export default SignOutLinks;
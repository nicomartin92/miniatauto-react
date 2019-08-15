import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.warn('submit', this.state);
    }

    render() {
        return (
            <div>
                <Header />

                <div className="main">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">
                            Sign Up
                    </h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="password">password</label>
                            <input type="password" id="password" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="firstName">First name</label>
                            <input type="text" id="firstName" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="lastName">Last name</label>
                            <input type="text" id="lastName" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Sign up</button>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        )
    }
}

export default SignUp

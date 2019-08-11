import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Grid.scss';

class Grid extends Component {
    render() {
        const unavailableStyles = {
            opacity: "0.5"
        }

        const availableStyles = {
            opacity: "1"
        }

        if (this.props.isLoading) {
            return (
                <li className="list__item">
                    <div className="spinner">
                        <span className="spinner-inner-1"></span>
                        <span className="spinner-inner-2"></span>
                        <span className="spinner-inner-3"></span>
                    </div>
                    <h2>Loading card ...</h2>
                </li>
            )
        }

        return (
            <li key={this.props.item.id} className="grid__item" style={this.props.item.available ? availableStyles : unavailableStyles} >
                <div className="grid__preference">
                    {this.props.item.preference}
                </div>
                <NavLink to={`/Car/${this.props.item.reference}`} >
                    <img className="grid__image"
                        loading="lazy"
                        src={this.props.item.views[0].image1}
                        alt={`${this.props.item.brand} ${this.props.item.model} ${this.props.item.version} - ${this.props.item.brandshop}`} />
                </NavLink>
                <div className="grid__info">
                    <h3>{this.props.item.brandshop} - {this.props.item.brand} {this.props.item.model} {this.props.item.version}</h3>
                    <h4>{this.props.item.year}</h4>
                    <p>{this.props.item.description}</p>
                </div>
            </li>
        )
    }
}

export default Grid;
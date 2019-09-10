import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PubSub from 'pubsub-js';

/* store */
import { connect } from 'react-redux';

import './PanelNav.scss';

class PanelNav extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            carsDataJsonFromState: [],
            data: {}
        }
        this.panelSwitcher = this.panelSwitcher.bind(this);
    }

    componentDidMount() {
        PubSub.subscribe('open:panelNav', () => {
            this.setState({
                isOpen: true
            })
        });

        /* fetching API from Json */
        fetch('http://localhost:3003/cars')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    carsDataJsonFromState: data
                })
                // console.warn(this.state.carsDataJsonFromState)
            })
            .catch(console.log)
    }

    componentWillUnmount() {
        PubSub.unsubscribe();
    }

    panelSwitcher(value) {
        if (value) {
            this.setState({
                isOpen: true
            })
        } else {
            this.setState({
                isOpen: false
            })
        }
    }

    render() {
        return (
            <div className={this.state.isOpen ? "panelNav expanded" : "panelNav"}>
                <div className={this.state.isOpen ? "overlay expanded" : "overlay"}
                    onClick={() => this.panelSwitcher(false)}>
                </div>
                <button className="buttonClose outer" onClick={() => this.panelSwitcher(false)}>
                    <div className="inner">
                        <label>Fermer</label>
                    </div>
                </button>
                <h3>cars</h3>
                <ul>
                    {/* this.state.carsDataJsonFromState */}
                    {this.props.cars.map((car) => (
                        <li key={car.id}>
                            <NavLink className="panelNav__item" to={`/Car/${car.reference}`} onClick={() => this.panelSwitcher(false)}>
                                <div className="panelNav__label">
                                    {car.brand} {car.model} {car.version}
                                </div>
                                <div className="panelNav__image">
                                    <img src={car.views[0].image1} loading="lazy" alt={car.model} />
                                </div>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        cars: state.carR.cars,
        stock: state.carR.stock,
        toast: state.carR.toast
    }
}

// export default PanelNav;
export default connect(mapStateToProps)(PanelNav);
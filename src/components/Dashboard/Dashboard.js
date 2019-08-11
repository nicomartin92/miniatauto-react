import React, { Component } from 'react';

import './Dashboard.scss';

class Dashboard extends Component {

    toSell() {
        if (this.props.item.available && this.props.item.stock > 0) {
            return (
                <div>
                    <img width="120" src={this.props.item.views[0].image1} alt={`${this.props.item.brand} ${this.props.item.model} ${this.props.item.version}`} />
                </div>
            )
        }
    }

    sold() {
        if (!this.props.item.available && this.props.item.stock < 1 && this.props.item.sold) {
            return (
                <div>
                    <img width="120" src={this.props.item.views[0].image1} alt={`${this.props.item.brand} ${this.props.item.model} ${this.props.item.version}`} />
                </div>
            )
        }
    }

    keep() {
        if (this.props.item.keep) {
            return (
                <div>
                    <img width="120" src={this.props.item.views[0].image1} alt={`${this.props.item.brand} ${this.props.item.model} ${this.props.item.version}`} />
                </div>
            )
        }
    }

    render() {
        return (
            <div className="gridTable__row">
                <div className="gridTable__cell">
                    {this.props.item.brand} {this.props.item.model} {this.props.item.version}
                </div>

                <div className="gridTable__cell">
                    {this.keep()}
                </div>

                <div className="gridTable__cell">
                    {this.toSell()}
                </div>

                <div className="gridTable__cell">
                    {this.sold()}
                </div>
            </div>
        )
    }
}

export default Dashboard;
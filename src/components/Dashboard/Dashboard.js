import React, { Component } from 'react';

import './Dashboard.scss';

class Dashboard extends Component {
    render () {
        return (
            <div className="gridTable__row">
                <div className="gridTable__cell">{this.props.item.brand} {this.props.item.model} {this.props.item.version}</div>
                <div className="gridTable__cell">{this.props.item.brand}</div>
            </div>
        )
    }
}

export default Dashboard;
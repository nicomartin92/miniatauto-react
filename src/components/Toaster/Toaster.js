import React, { Component } from 'react';

/* styles */
import './Toaster.scss';

class Toaster extends Component {
    render() {
        return (
            <div className="toast">
                <div className="toast__wrapper">
                    <div className="toast__header">
                        hello
                    </div>
                    <div className="toast__text"></div>
                </div>
            </div>
        )
    }
}

export default Toaster;

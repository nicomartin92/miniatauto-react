import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

/* SVG */
import { ReactComponent as CrossIcon } from '../../assets/cross-icon.svg';

/* styles */
import './Toaster.scss';

type MyProps = {
    item: {
        url: string,
        succes: string,
        text: string,
        image: string
    }
};

type MyState = {
    showToaster: boolean,
    timer: number
};

class Toaster extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            showToaster: false,
            timer: 3000
        }

        /* this.positionMap = {
            1: 'top-left',
            2: 'top-right',
            3: 'bottom-right',
            4: 'bottom-left',
        } */
    }

    toastDisplay(value: boolean) {
        this.setState({
            showToaster: value
        });

        setTimeout(() => {
            this.setState({
                showToaster: false
            })
        }, this.state.timer);
    }

    render() {
        return (
            <div className={this.state.showToaster ? "toast -show" : "toast"}>
                <div className="toast__wrapper">
                    <NavLink to={`/Car/${this.props.item.url}`} >
                        <div className="toast__header">
                            {this.props.item.succes}
                        </div>
                        <div className="toast__content">
                            <div className="toast__text">{this.props.item.text}</div>
                            <div className="toast__image">
                                <img src={this.props.item.image} alt={this.props.item.text} />
                            </div>
                        </div>
                    </NavLink>

                    <button className="toast__close" onClick={() => { this.toastDisplay(false) }}>
                        <CrossIcon />
                    </button>
                </div>
            </div>
        )
    }
}

export default Toaster;

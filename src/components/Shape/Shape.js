import React, {Component} from 'react';

/* SVG */
import { ReactComponent as ShapeIcon } from '../../assets/shape.svg';

/* Styles */
import './Shape.scss';

class Shape extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false,
            carsDataJsonFromState: [],
            data: {}
        }
    }

    render() {
        return (
            <div className="shape">
                hello {this.props.item.brand}
                <ShapeIcon className="shape__icon" />
                <img className="shape__img" src={this.props.item.views[0].image1} alt=""/>
            </div>
        )
    }
}

export default Shape;
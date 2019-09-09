import React, { Component } from 'react';

/* SVG */
import { ReactComponent as ShapeIcon } from '../../assets/shape.svg';

/* Styles */
import './Shape.scss';

type MyProps = {
    item: {
        brand: string,
        views: [
            {
                'image1': string
            }
        ],
        text: string,
        image: string
    }
};

type MyState = {
    isOpen: boolean,
    carsDataJsonFromState: object,
    data: object,
    colors: [
        {
            'name': 'blue',
            'value': '#4becf8',
            'id': 1
        },
        {
            'name': 'yellow',
            'value': '#fcff4d',
            'id': 2
        },
        {
            'name': 'green',
            'value': '#4ce254',
            'id': 3
        }
    ],
    svgDisplay: boolean
};

class Shape extends Component<MyProps, MyState> {
    constructor(props: any) {
        super(props)
        this.state = {
            isOpen: false,
            carsDataJsonFromState: [],
            data: {},
            colors: [
                {
                    'name': 'blue',
                    'value': '#4becf8',
                    'id': 1
                },
                {
                    'name': 'yellow',
                    'value': '#fcff4d',
                    'id': 2
                },
                {
                    'name': 'green',
                    'value': '#4ce254',
                    'id': 3
                }
            ],
            svgDisplay: false
        }
    }

    switchColor = (color: string, name: string) => {
        this.setState({
            svgDisplay: true
        });

        setTimeout(() => {
            if (this.state.svgDisplay) {
                let btn = this.refs.colorFill as HTMLElement
                btn.style.fill = color;
                btn.style.opacity = "1";
            }
        }, 100);
    }

    resetColor = () => {
        this.setState({
            svgDisplay: false
        });
    }

    render() {

        const squareStyles = (value: string) => {
            return { backgroundColor: value }
        };

        const buttonColors = this.state.colors.map((color) => {
            return (
                <button className="shape__button button" onClick={() => this.switchColor(color.value, color.name)} key={color.id}>
                    <span className="shape__colorName">{color.name}</span>
                    <span className="shape__colorSquare" style={squareStyles(color.value)}></span>
                </button>
            )
        });

        const showShape = this.state.svgDisplay ?
            <ShapeIcon className="shape__icon" ref="colorFill" /> :
            '';

        return (
            <div className="shape">
                {showShape}
                <img className="shape__img" src={this.props.item.views[0].image1} alt="" />

                <div className="shape__buttons">
                    {buttonColors}

                    <button className="shape__button button" onClick={this.resetColor}>Réinitialiser</button>
                </div>
            </div>
        )
    }
}

export default Shape;
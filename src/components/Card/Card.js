import React from 'react'
import './Card.scss'

/* const Card = (props) => {

    return (
        <div className="card">
            <img src={props.item.image} alt="" />
            <h3>{props.item.title}</h3>
            <p>{props.item.brand} {props.item.model} {props.item.version}</p>
            <p style={{display: !props.item.year && "none"}}>{props.item.year}</p>
        </div>
    )
} */

class Card extends React.Component {
    render() {
        return (
            <div className="card">
                <img src={this.props.item.image} alt="" />
                <h3>{this.props.item.title}</h3>
                <p>{this.props.item.brand} {this.props.item.model} {this.props.item.version}</p>
                <p style={{display: !this.props.item.year && "none"}}>{this.props.item.year}</p>
            </div>
       )
    }
}

export default Card
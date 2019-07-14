import React, {Component} from 'react'
import './List.scss'

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


class List extends Component {
    
    render() {
        const unavailableStyles = {
            opacity: "0.5"
        }

        const availableStyles = {
            opacity: "1"
        }

        if (this.props.isLoading) {
            console.warn('loading ------------------------');
            return <li className="list__item"><h2>Loading card ...</h2></li>
        }

        return (
            <li className="list__item">
                <div style={this.props.item.available ? availableStyles : unavailableStyles}>
                    <img src={this.props.item.image} loading="lazy" alt={this.props.item.model} />
                    <div>{this.props.item.title}</div>
                    <div>{this.props.item.brandshop} - {this.props.item.brand} {this.props.item.model} {this.props.item.version}</div>
                    <div style={{ display: !this.props.item.year && "none" }}>{this.props.item.year}</div>
                    <div>Stock:  {this.props.item.stock}</div>
                    <button onClick={() => this.props.countStock(this.props.item.id)}>Acheter</button> 
                </div> 
            </li>
       )
    }
}

export default List
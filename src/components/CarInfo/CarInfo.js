import React, { Component } from 'react'

class CarInfo extends Component {
    render() {
        return (
            <div>
                <div>
                    {this.props.item.brand} 
                    {this.props.item.model}
                    {this.props.item.version}
                </div>
            </div>
        )
    }
}

export default CarInfo

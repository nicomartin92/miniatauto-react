import React, { Component } from 'react';

type MyProps = {
    item: {
        brand: string,
        model: string,
        version: string
    }
};

class CarInfo extends Component<MyProps> {
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

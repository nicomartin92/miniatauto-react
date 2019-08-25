import React, { Component } from 'react';

/* components */
import CarInfo from '../CarInfo/CarInfo';

class AddForm extends Component {
    constructor() {
        super();

        this.state = {
            brand: null,
            model: null,
            version: null,
            searchString: '',
            carList: [
                { brand: 'Peugeot', model: '205', version: 'GTI Gutmann' },
                { brand: 'Renault', model: 'Megane 4', version: 'GTI GutmannRS' },
                { brand: 'Bmw', model: 'E92', version: 'M3' }
            ]
        }
    }    
    

    changeValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitForm = (e) => {
        console.warn(this.state)
        e.preventDefault();

        this.setState({
            carList: this.state.carList.concat({
                brand: this.refs.brand.value, 
                model: this.refs.model.value,
                version: this.refs.version.value
            })
        });
    }

    onChange = (e) => {
        this.setState({
            searchString: e.target.value
        });
    }

    render() {

        let filterList = this.state.carList.filter(
            (car) => {
                return car.brand.toLowerCase().indexOf((this.state.searchString).toLowerCase()) !== -1
            }
        );

        // let filterList = this.state.carList;

        const mapToComponent = (data) => {
            return data.map((contact, i) => {
                return (<CarInfo item={contact} />);
            });
        };

        return (
            <div>
                {mapToComponent(this.state.carList)}
                {this.state.searchString}
                <input
                    type="text"
                    value={this.state.searchString}
                    onChange={this.onChange.bind(this)} />
                <h2>Résultat: {this.state.searchString}</h2>
                <div>
                    hello
                    {
                        filterList.map(
                            (carFilter) => {
                                return (<CarInfo item={carFilter}/>)
                            }
                        )
                    }
                </div>
                <form onSubmit={this.submitForm}>
                    <label htmlFor="brand">Brand:</label>
                    <input type="text" id="brand" ref="brand" onChange={this.changeValue} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" ref="model" onChange={this.changeValue} />

                    <label htmlFor="version">Version:</label>
                    <input type="text" id="version" ref="version" onChange={this.changeValue} />
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm;

import React, { Component } from 'react';

/* components */
import CarInfo from '../CarInfo/CarInfo';

class AddForm extends Component {
    state = {
        brand: null,
        model: null,
        version: null,
        searchString: '',
        carList: [
            { id: 1, brand: 'Peugeot', model: '205', version: 'GTI Gutmann' },
            { id: 2, brand: 'Renault', model: 'Megane 4', version: 'GTI GutmannRS' },
            { id: 3, brand: 'Bmw', model: 'E92', version: 'M3' }
        ]
    }

    changeValue = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    submitForm = (e) => {
        e.preventDefault();
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
                    <input type="text" id="brand" onChange={this.changeValue} />

                    <label htmlFor="model">Model:</label>
                    <input type="text" id="model" onChange={this.changeValue} />

                    <label htmlFor="version">Version:</label>
                    <input type="text" id="version" onChange={this.changeValue} />
                    <button className="button">Submit</button>
                </form>
            </div>
        )
    }
}

export default AddForm;

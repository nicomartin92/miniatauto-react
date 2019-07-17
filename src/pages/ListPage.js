import React, {Component} from 'react';

/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import List from '../components/List/List';

/* Datas */
import carsData from '../db';

/* jsx synthax 
const ListPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>List page</h1>
            </div>
            
            <Footer />
        </div>
    );
} */

class ListPage extends Component {
    constructor() {
        super()
        this.state = {
          carsDataFromState: carsData,
          stock: 0,
          isLoading: true,
          loadingDelay: 800,
          carsDataJsonFromState: [],
          data: {},
          searchString: "",
          users: []
        }
      this.countStock = this.countStock.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }

    countStock(id) {
        this.setState(prevState => {
          const updatedStock = prevState.carsDataFromState.map(item => {
            if (item.id === id) {
              item.stock = (item.stock - 1)
              if (item.stock <= 0 || item.stock === isNaN) {
                item.stock = 0
                item.available = !item.available
              }
            }
            return item
          })
          return {
            carsDataFromState: updatedStock
          }
        })
    }
  
    handleChange() {
      this.setState({
        searchString: this.refs.search.value
      });
    }

    /* did mount */
    componentDidMount() {
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, this.state.loadingDelay);
    
        /* fetching API from Json */
        fetch('http://localhost:3003/cars')
          .then(res => res.json())
          .then((data) => {
            this.setState({
              carsDataJsonFromState: data
            })
            console.warn(this.state.carsDataJsonFromState)
          })
        .catch(console.log)
    }

    render() {
      
        let _cars = this.state.carsDataFromState;
        let search = this.state.searchString.trim().toLowerCase();

        if (search.length > 0) {
          _cars = _cars.filter(function(car) {
            return  car.model.toLowerCase().match(search) ||
                    car.brand.toLowerCase().match(search) ||
                    car.year.toLowerCase().match(search) ||
                    car.brandshop.toLowerCase().match(search);
          });
        }

        /* from Json */
        const carsItemsFromJson = _cars.map(item => <List
            isLoading={this.state.isLoading}
            countStock={this.countStock}
            key={item.id}
            item={item} />); 
        
        return (
            <div>
                <Header />

                <div className="main">
                    <h1>List page</h1>
                    <input
                      type="text"
                      value={this.state.searchString}
                      ref="search"
                      onChange={this.handleChange}
                      placeholder="type name here"
                    />
                    <div className="list">
                        <ul className="list__wrapper">
                        {carsItemsFromJson}
                        </ul>
                    </div>
                </div>
                
                <Footer />
            </div>
        )
    }
}

export default ListPage;
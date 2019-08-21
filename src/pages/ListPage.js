import React, { Component } from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import List from '../components/List/List';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import Toaster from '../components/Toaster/Toaster';

/* store */
import { connect } from 'react-redux';
import { deleteStock } from '../actions/postActions';

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
      originCarsDataJsonFromState: [],
      data: {},
      searchString: "",
      users: []
    }
    this.countStock = this.countStock.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.year = this.year.bind(this);
    this.countryBrand = this.countryBrand.bind(this);
    this.clearAll = this.clearAll.bind(this);
  }

  countStock(id) {
    this.setState(prevState => {
      const updatedStock = prevState.carsDataJsonFromState.map(item => {
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
        carsDataJsonFromState: updatedStock
      }
    })

    this.props.deleteStock(this.props.stock - 1);
  }

  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }

  year(year) {
    // Please keep it
    let _cars1 = this.state.carsDataJsonFromState;
    _cars1 = _cars1.slice().sort((a, b) => {
      if (year === 'asc') {
        return a.year - b.year
      } else {
        return b.year - a.year
      }
    });
    this.setState({
      carsDataJsonFromState: _cars1
    });
  }

  countryBrand(country) {
    // Please keep it 
    let _countryBrand = this.state.originCarsDataJsonFromState;
    _countryBrand = _countryBrand.filter(function (car) {
      switch (country) {
        case 'fr':
          return car.country === 'fr'
        case 'de':
          return car.country === 'de'
        case 'it':
          return car.country === 'it'
        case '1/18':
          return car.size === '1/18'
        case '1/12':
          return car.size === '1/12'
        case 'available':
          return car.available === true
        case 'not available':
          return car.available === false
        default:
          return car.country === 'fr'
      }
    });
    this.setState({
      carsDataJsonFromState: _countryBrand
    });
  }

  clearAll() {
    // Please keep it
    let _clearAll = this.state.originCarsDataJsonFromState;
    this.setState({
      carsDataJsonFromState: _clearAll
    });
  }

  /* will mount */
  componentWillMount() {
    const currentStock = this.props.cars.filter(car => car.available === true);
    const currentStockResult = currentStock.reduce((sum, item) => {
      return sum += item.stock
    }, 0);

    this.props.updateGlobalStock(currentStockResult);
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
          carsDataJsonFromState: data,
          originCarsDataJsonFromState: data
        })
        // console.warn(this.state.carsDataJsonFromState)
      })
      .catch(console.log)
  }

  render() {
    const carToSell = this.props.stock;

    // Please keep it
    let _cars = this.state.carsDataJsonFromState;
    let search = this.state.searchString.trim().toLowerCase();

    if (search.length > 0) {
      _cars = _cars.filter(function (car) {
        return car.model.toLowerCase().match(search) ||
          car.brand.toLowerCase().match(search) ||
          car.version.toLowerCase().match(search) ||
          car.year.toLowerCase().match(search) ||
          car.brandshop.toLowerCase().match(search);
      });
    }

    let searchCount = _cars.length;

    /* from Json */
    const carsItemsFromJson = _cars.map(item => <List
      isLoading={this.state.isLoading}
      countStock={this.countStock}
      key={item.id}
      item={item} />);

    return (
      <div>
        <PanelNav />
        <Header />
        <Autocomplete />
        <Toaster />

        <div className="main">
          <h1>List page</h1>

          <div className="list">
            <div className="sticky">
              <div className="list__searchBar">
                <div className="list__search">
                  <h3 className="center">
                    Chercher un modèle particulier: ({searchCount} disponibles) ({carToSell}) à vendre
                  </h3>
                  <div className="list__searchMain">
                    <input
                      type="text"
                      value={this.state.searchString}
                      ref="search"
                      onChange={this.handleChange}
                      placeholder="type name here" />

                    <button className="button" onClick={this.clearAll}>Clear all</button>
                  </div>
                </div>
              </div>

              <div className="list__filter">
                <button className="button" onClick={() => this.year('asc')} >Année asc</button>
                <button className="button" onClick={() => this.year('des')}>Année des</button>
                <button className="button" onClick={() => this.countryBrand('fr')}>France</button>
                <button className="button" onClick={() => this.countryBrand('de')}>Allemagne</button>
                <button className="button" onClick={() => this.countryBrand('it')}>italie</button>
                <button className="button" onClick={() => this.countryBrand('1/18')}>1/18</button>
                <button className="button" onClick={() => this.countryBrand('1/12')}>1/12</button>
                <button className="button" onClick={() => this.countryBrand('available')}>A Vendre</button>
                <button className="button" onClick={() => this.countryBrand('not available')}>Vendus</button>
              </div>
            </div>

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

const mapStateToProps = (state) => {
  return {
    cars: state.carR.cars,
    stock: state.carR.stock
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStock: (value) => { dispatch(deleteStock(value)) },
    updateGlobalStock: (value) => { dispatch({ type: 'UPDATE__GLOBAL__STOCK', stock: value }) },
    updateCurrentCar: (id) => { dispatch({ type: 'UPDATE__CURRENT__CAR', stock: id }) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListPage);
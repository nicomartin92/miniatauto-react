import React, { Component } from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import PageIndicator from '../components/PageIndicator/PageIndicator';
import Grid from '../components/Grid/Grid';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import Slider from '../components/Slider/Slider';

/* store */
import { connect } from 'react-redux';

class WhishlistPage extends Component {
  constructor() {
    super()
    this.state = {
      isLoading: true,
      loadingDelay: 500,
      carsDataJsonFromState: [],
      data: {}
    }
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
        // console.warn(this.state.carsDataJsonFromState)
      })
      .catch(console.log)
  }

  render() {


    // let _cars = this.state.carsDataJsonFromState;
    let _cars = this.props.cars;

    _cars = _cars.filter(car => car.preference > 0).sort((a, b) => {
      return a.preference - b.preference
    });

    const whislistGrid = _cars.map(item =>
      <Grid item={item} isLoading={this.state.isLoading} key={item.id}></Grid>);

    return (
      <div>
        <PanelNav />
        <Header />
        <PageIndicator color={'#0b299f'} />
        <Autocomplete />

        <div className="main">
          <h1>Whishlist page</h1>

          <Slider item={_cars} view={2} />

          <ul className="grid">
            {whislistGrid}
          </ul>
        </div>

        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      cars: state.carR.cars,
      stock: state.carR.stock,
      toast: state.carR.toast
  }
}

// export default WhishlistPage;
export default connect(mapStateToProps)(WhishlistPage);
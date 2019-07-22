import React, {Component} from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import Grid from '../components/Grid/Grid';

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
            console.warn(this.state.carsDataJsonFromState)
          })
          .catch(console.log)
    }

    render() {
      
      
      let _cars = this.state.carsDataJsonFromState;
      
      _cars = _cars.filter(car => car.preference > 0).sort((a, b) => {
        return a.preference - b.preference
      });
      
      const whislistGrid = _cars.map(item =>
        <Grid item={item} isLoading={this.state.isLoading}></Grid>);
      
        return (
            <div>
                <PanelNav />
                <Header />
    
                <div className="main">
                  <h1>Whishlist page</h1>
              
                  <ul className="grid">
                    {whislistGrid}
                  </ul>
                </div> 
                
                <Footer />
            </div>
        )
    }
}

export default WhishlistPage;
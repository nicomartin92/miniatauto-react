import React, {Component} from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import List from '../components/List/List';

/* Datas */
import carsData from '../db';

/* jsx syntax
const MainPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>Main page</h1>
            </div>
            
            <Footer />
        </div>  
    );
} */

class MainPage extends Component {
    constructor() {
        super()
        this.state = {
          carsDataFromState: carsData,
          answer: "Ottomobile",
          isLogged: true,
          stock: 0,
          isLoading: true,
          carsD: [],
          error: null,
          loadingDelay: 500,
          carsDataJsonFromState: [],
          requestFailed: false,
          data: {}
        }
        this.countStock = this.countStock.bind(this)
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

        /* from Array */
        const carsItems = this.state.carsDataFromState.map(item => <List
            isLoading={this.state.isLoading}
            countStock={this.countStock}
            key={item.id}
            item={item} />);
      
        /* from Json */
        const carsItemsFromJson = this.state.carsDataFromState.map(item => <List
            isLoading={this.state.isLoading}
            countStock={this.countStock}
            key={item.id}
            item={item} />);
  
        /* Word display */
        let worldDisplay;
        if (this.state.isLogged) {
            worldDisplay = 'vrai';
        } else {
            worldDisplay = 'faux';
        }
    
        if(this.state.requestFailed) return <p>Request failed.</p>
        if (!this.state.data) return <p>Loading</p>
  
        /* {!isLoading ?
        Object.keys(carsD).map(key => <Post key={key} body={carsD[key]} />) :
        <h3>Loading...</h3>} */
        
        return(
            <div>
                <PanelNav />
                <Header />
    
                <div className="main">
                    <h1>Main page1</h1>

                    <h2>Cars display from Json</h2>

                    <div className="list">
                        <ul className="list__wrapper">
                        {carsItemsFromJson}
                        </ul>
                    </div>
                    
                    <h2>Cars display from Json with direct node</h2>

                    {this.state.carsDataJsonFromState.map((car) => (
                        <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">{car.brand}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">
                            { car.brand &&
                            <span>
                            Completed
                            </span>
                            }
                            { !car.content &&
                            <span>
                                Pending
                            </span>
                            }              
                            </h6>
                        </div>
                        </div>
                    ))}

                    <h2>Cars display from Array</h2>

                    <div className="list">
                        <ul className="list__wrapper">
                        {carsItems}
                        </ul>
                    </div>

                    <h2>Cars display with props</h2>

                    {/* <div className="listContainer">
                        <Card list={{ title: "Peugeot 2008 1", 
                                    imgUrl: "https://www.automobile-magazine.fr/asset/cms/840x394/161635/config/111991/peugeot-2008-1906pc-129.jpg", 
                                    view: "side",
                                    year: "2019"}}
                        ></Card>
                        </div> */}
                    
                    {this.state.answer}

                    <h1>Marque principale ? {this.state.answer}</h1>
                    <h2>Utilisateur est connecté: {worldDisplay}</h2>

                </div>
                
                <Footer />
            </div>  
        )
    }
}

export default MainPage;
import React, {Component} from 'react';

/* Components */
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

/* const CarPage = () => {
    return (
        <div>
            <Header />

            <div className="main">
                <h1>User page</h1>
                <ul>
                    {['nico', 'paul', 'luc'].map((user, idx) => {
                        return <li key={idx}>{user}</li>
                    })}
                </ul>
            </div>
            
            <Footer />
        </div>
    );
} */
class CarPage extends Component {
    constructor() {
        super()
        this.state = {
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
        const showCorrectCar = this.state.carsDataJsonFromState.filter(car => car.reference === this.props.match.params.id);
        // const mapCoorectCar = showCorrectCar.map(item => item);

        return (
            <div>
                <Header />
    
                    <div className="main">
                        {showCorrectCar.map((car) => (
                            <div>
                                <h3>Modèle: {car.reference}</h3>
                                <h5 className="card-title">{car.brand} {car.model} {car.version}</h5>
                                <div class="textBlock">
                                    <div class="textBlock__text">
                                        <h2 class="textBlock__subLabel">{car.brandshop}</h2>
                                        <h1 class="textBlock__label">
                                            { car.brand } { car.model }
                                        </h1>
                                        <h3 class="textBlock__version">{car.version}</h3>
                                        <span class="textBlock__year">{ car.year }</span>
                                        </div>
                                        <div class="textBlock__image">
                                        <img src={car.image} loading="lazy" alt={car.model} />
                                    </div>
                                </div>

                                <div class="imageContent">
                                    <div class="imageContent__item -medium">
                                        <img src={car.views[0].image1} loading="lazy" alt={car.model} />   
                                    </div>
                                    <div class="imageContent__item -small">
                                        <div class="textContent">
                                            <h3 class="subTitle">Détails</h3>
                                            <p class="textContent__description">
                                                { car.description }
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="imageContent">
                                    <div class="imageContent__item -small">
                                        <div class="textContent">
                                            <h3 class="subTitle">Caractéristiques</h3>
                                            <ul class="specs">
                                                <li class="specs__item">
                                                    <span>Référence:</span>
                                                    <span>{ car.reference }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Producteur:</span>
                                                    <span>{ car.brandshop }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Marque:</span>
                                                    <span>{ car.brand }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Modèle:</span>
                                                    <span>{ car.model }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Version:</span>
                                                    <span>{ car.version }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Année:</span>
                                                    <span>{ car.year }</span>
                                                </li>
                                                <li class="specs__item">
                                                    <span>Couleur:</span>
                                                    <span>
                                                    <span class="skew" style={{ backgroundColor: car.color }} />
                                                        { car.colorname }
                                                    </span>
                                                </li>
                                            </ul>  
                                        </div>
                                    </div>
                                    <div class="imageContent__item -medium">
                                        <img src={car.views[0].image2} loading="lazy" alt={car.model} />   
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                
                <Footer />
            </div>
        )
    } 
}

export default CarPage;
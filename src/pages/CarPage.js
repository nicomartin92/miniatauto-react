import React, { Component } from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import Slider from '../components/Slider/Slider';

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
                // console.warn(this.state.carsDataJsonFromState)
            })
            .catch(console.log)
    }

    render() {
        const showCorrectCar = this.state.carsDataJsonFromState.filter(car => car.reference === this.props.match.params.id);
        // const mapCoorectCar = showCorrectCar.map(item => item);

        const showCorrectCarBrand = showCorrectCar.map(car => car.brand);
        const otherCategories = this.state.carsDataJsonFromState.filter(car => car.brand === showCorrectCarBrand[0]);

        return (
            <div>
                <PanelNav />
                <Header />
                <Autocomplete />

                <div className="main">
                    {showCorrectCar.map((car) => (
                        <div>
                            <h3>Modèle: {car.reference}</h3>
                            <h5 className="card-title">{car.brand} {car.model} {car.version}</h5>
                            <div className="textBlock">
                                <div className="textBlock__text">
                                    <h2 className="textBlock__subLabel">{car.brandshop}</h2>
                                    <h1 className="textBlock__label">
                                        {car.brand} {car.model}
                                    </h1>
                                    <h3 className="textBlock__version">{car.version}</h3>
                                    <span className="textBlock__year">{car.year}</span>
                                </div>
                                <div className="textBlock__image">
                                    <img src={car.image} loading="lazy" alt={car.model} />
                                </div>
                            </div>

                            <div className="imageContent">
                                <div className="imageContent__item -medium">
                                    <img src={car.views[0].image1} loading="lazy" alt={car.model} />
                                </div>
                                <div className="imageContent__item -small">
                                    <div className="textContent">
                                        <h3 className="subTitle">Détails</h3>
                                        <p className="textContent__description">
                                            {car.description}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="imageContent">
                                <div className="imageContent__item -small">
                                    <div className="textContent">
                                        <h3 className="subTitle">Caractéristiques</h3>
                                        <ul className="specs">
                                            <li className="specs__item">
                                                <span>Référence:</span>
                                                <span>{car.reference}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Producteur:</span>
                                                <span>{car.brandshop}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Marque:</span>
                                                <span>{car.brand}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Modèle:</span>
                                                <span>{car.model}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Version:</span>
                                                <span>{car.version}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Année:</span>
                                                <span>{car.year}</span>
                                            </li>
                                            <li className="specs__item">
                                                <span>Couleur:</span>
                                                <span>
                                                    <span className="skew" style={{ backgroundColor: car.color }} />
                                                    {car.colorname}
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="imageContent__item -medium">
                                    <img src={car.views[0].image2} loading="lazy" alt={car.model} />
                                </div>
                            </div>
                            <div className="imageContent__item -medium">
                                <img src={car.views[0].image3} loading="lazy" alt={car.model} />
                            </div>
                            <h2>Découvrez nos autres {car.brand}:</h2> 
                        </div>
                    ))}

                    
                    <Slider item={otherCategories} view={1} />
                </div>

                <Footer />
            </div>
        )
    }
}

export default CarPage;
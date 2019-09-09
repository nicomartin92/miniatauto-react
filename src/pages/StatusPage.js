import React, { Component } from 'react';

/* Components */
import Header from '../components/Header/Header';
import PanelNav from '../components/PanelNav/PanelNav';
import Footer from '../components/Footer/Footer';
import Autocomplete from '../components/Autocomplete/Autocomplete';
import Dashboard from '../components/Dashboard/Dashboard';
import Notifications from '../components/Dashboard/Notifications';
import ProjectList from '../components/Projects/ProjectList';
import AddForm from '../components/AddForm/AddForm';

/* Store */
import { connect } from 'react-redux';

/* firestore */
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';

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
class StatusPage extends Component {
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
        // const carDashboard = this.state.carsDataJsonFromState.map(car => <Dashboard item={car} key={car.id} />);
        const carDashboard = this.props.cars.map(car => <Dashboard item={car} key={car.id} />);
        
        return (
            <div>
                <PanelNav />
                <Header />
                <Autocomplete />

                <div className="main">
                    <h1>Dashboard</h1>

                    {/* <AddForm /> */}

                    {/* <div className="dashboard">
                        <div>
                            <ProjectList projects={this.props.projects} />
                        </div>
                        <div>
                            <Notifications />
                        </div>
                    </div> */}

                    <div className="gridTable">
                        <div className="gridTable__row">
                            <div className="gridTable__cell">Status:</div>
                            <div className="gridTable__cell">Garder</div>
                            <div className="gridTable__cell">A vendre</div>
                            <div className="gridTable__cell">Vendus</div>
                            <div className="gridTable__cell">Supprimer</div>
                        </div>
                        {carDashboard}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        // projects: state.projectR.projects
        projects: state.firestore.ordered.projects,
        cars: state.carR.cars,
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(StatusPage);
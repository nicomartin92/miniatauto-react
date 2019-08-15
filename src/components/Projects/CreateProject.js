import React, { Component } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

class CreateProject extends Component {
    state = {
        title: '',
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.warn(this.state);
    }

    render() {
        return (
            <div>
                <Header />

                <div className="main">
                    <form onSubmit={this.handleSubmit} className="white">
                        <h5 className="grey-text text-darken-3">
                            Create a new project
                    </h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" onChange={this.handleChange} />
                        </div>

                        <div className="input-field">
                            <label htmlFor="content">Project Content</label>
                            <textarea
                                className="materialize-textarea"
                                id="content"
                                onChange={this.handleChange}></textarea>
                        </div>

                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">Create Project</button>
                        </div>
                    </form>
                </div>

                <Footer />
            </div>
        )
    }
}

export default CreateProject;
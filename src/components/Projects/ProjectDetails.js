import React, { Component } from 'react';

class ProjectDetails extends Component {
    render() {
        const id = this.props.match.params.id;
        console.warn(id);

        return (
            <div className="container section project-detail">
                <div className="card z-depth-0">
                    <div className="card-content">
                        <span className="card-title">Project title - {id}</span>
                        <p>Lorem</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by admin</div>
                        <div>2 septembre</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectDetails

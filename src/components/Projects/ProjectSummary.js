import React, { Component } from 'react';

class ProjectSummary extends Component {
    render() {
        return (
            <div className="card z-depth-0 project-summary">
                <div className="card-content grey-text text-darken-3">
                    <div className="card-title">
                        Project list
                        </div>
                    <p>Posted by the admin</p>
                    <p className="grey-text">3 septembre</p>
                </div>
            </div>
        )
    }
}

export default ProjectSummary;
import React, {Component} from 'react';
import ProjectSummary from './ProjectSummary';

class ProjectList extends Component {
    render() {
        return (
            <div className="project-list section">
                <ProjectSummary />
            </div>
        )  
    }
}

export default ProjectList;
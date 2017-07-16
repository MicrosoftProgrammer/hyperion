import React, { Component } from 'react';
import '../../styles/app.css';
import ProjectStatus from './projectStatus'

class ProjectInfo extends Component {
    render() {
        return (
            <div className="panel-body">
                <div className="form-group col-md-4">
                    <label>Project Name</label>
                    <p className="form-control-static">Horizon Pro</p>
                </div>
                <div className="form-group col-md-4">
                    <label>Timeline</label>
                    <p className="form-control-static">Jun 2017 - Jan 2018</p>
                </div>
                <div className="form-group col-md-4">
                    <label>Budget</label>
                    <p className="form-control-static">10,000 USD</p>
                </div>
                <ProjectStatus />
            </div>
        );
    }
}

export default ProjectInfo;

import React, { Component } from 'react';
import '../../styles/app.css';
import { numberWithCommas } from '../../utils/helper';

class ProjectInfo extends Component {
    render() {
        return (
            <div className="col-md-12">
                <div className="form-group col-md-4">
                    <label>Project Name</label>
                    <p className="form-control-static">{this.props.project.ProjectName}</p>
                </div>
                <div className="form-group col-md-4">
                    <label>Timeline</label>
                    <p className="form-control-static">{this.props.project.FromDate} - {this.props.project.ToDate}</p>
                </div>
                <div className="form-group col-md-4">
                    <label>Budget</label>
                    <p className="form-control-static">{numberWithCommas(this.props.project.Budget)} USD</p>
                </div>

            </div>
        );
    }
}

export default ProjectInfo;

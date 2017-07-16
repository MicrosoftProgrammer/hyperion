import React, { Component } from 'react';
import '../../styles/app.css';
import $ from 'jquery';

class ViewProjectAggregate extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.flip').hover(function () {
                $(this).find('.card').toggleClass('flipped');
            });
        });
    }

    render() {
        const css = `
        .progress-bar-success {
            width : 40%;
        }
          .progress-bar-info {
            width : 50%;
        }
          .progress-bar-warning {
            width : 70%;
        }
        
          .progress-bar-danger {
            width : 90%;
        }
`;
        let memberComponents = "";
        if (this.props.project.Members.length > 0) {
            memberComponents = this.props.project.Members.map((member, index) => (
                <div key={index} className="row">
                    <label className="col-md-8">{member.EmpName}, {member.EmpID}</label>
                    <div className="col-md-4">
                        <div className="progress progress-striped active">
                            <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                <span className="sr-only">40% Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </div>
            ));
        }
        return (
            <div className="flip">
                <style>{css}</style>
                <div className="card">
                    <div className="face front">
                        <div className="panel panel-green">
                            <div className="panel-heading">
                                Project Detail
                        </div>
                            <div className="panel-body">
                                <div className="form-group">
                                    <label>Project Name</label>
                                    <p className="form-control-static">{this.props.project.ProjectName}</p>
                                </div>
                                <div className="form-group">
                                    <label>Timeline</label>
                                    <p className="form-control-static">{this.props.project.FromDate} - {this.props.project.ToDate}</p>
                                </div>
                                <div className="form-group">
                                    <label>Budget</label>
                                    <p className="form-control-static">{this.props.project.Budget} USD</p>
                                </div>
                                <div className="progress progress-striped active">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                        <span className="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="face back">
                        <div className="panel panel-primary">
                            <div className="panel-heading">
                                Team Members
                        </div>
                            <div className="panel-body">
                                {memberComponents}
                                <button type="button" className="btn btn-success pull-right"><i className="fa fa-edit">&nbsp;</i>Edit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProjectAggregate;

import React, { Component } from 'react';
import '../../styles/app.css';
import $ from 'jquery';
import { Link } from 'react-router-dom';
import { getMonths, numberWithCommas } from '../../utils/helper';

class ViewProjectAggregate extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $('.flip').hover(function () {
                $(this).find('.card').toggleClass('flipped');
            });
        });
    }

    render() {

        let memberComponents = "";
        let Months = getMonths(this.props.project.FromDate, this.props.project.ToDate);
        let totalPercent = 0;
        let members = this.props.project.Members.map((item, memindex) => {
            let months = Months.map((month, monindex) => {
                let Mont = item.Work.Month.filter((mon) => {
                    return mon.Name === month;
                });

                if (Mont.length > 0) {
                    totalPercent = totalPercent + parseFloat(Mont[0].Percentage, 1);
                    return {
                        Name: month,
                        Percentage: Mont[0].Percentage
                    }
                }
                else {
                    return {
                        Name: month,
                        Percentage: 0
                    }
                }
            });
            item.Work.Month = months;
            return item;
        });
        let project = this.props.project;
        project.Members = members;

        if (project.Members.length > 0) {
            memberComponents = project.Members.map((member, index) => {
                let tot = 0;
                member.Work.Month.map((month, monindex) => {
                    tot = tot + parseFloat(month.Percentage, 1);
                });

                let percent = Math.round(tot * 100 / totalPercent);
                let progress = "progress-bar progress-bar-warning";
                if (percent < 5) {
                    progress = "progress-bar progress-bar-warning";
                }
                else if (percent > 5 && percent < 10) {
                    progress = "progress-bar progress-bar-info";
                }
                else if (percent > 10 && percent < 20) {
                    progress = "progress-bar progress-bar-danger";
                }
                else if (percent > 20) {
                    progress = "progress-bar progress-bar-success";
                }

                let css = `
                #mem`+ project.ProjectID + index + ` {
                    width :`+ percent + `% !important;
                }`;
                return <div key={index} className="row">
                    <style>{css}</style>
                    <label className="col-md-9">{member.EmpName}, <small>{numberWithCommas(Math.round(tot * project.Budget / totalPercent))} USD</small></label>
                    <div className="col-md-3">
                        <div className="progress progress-striped active">
                            <div id={"mem" + project.ProjectID + index} className={progress} role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                <span className="sr-only"> Complete (success)</span>
                            </div>
                        </div>
                    </div>
                </div>
            });
        }
        return (
            <div className="flip">
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
                                    <p className="form-control-static">{numberWithCommas(this.props.project.Budget)} USD</p>
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
                                <Link to={{
                                    pathname: '/tracking',
                                    state: {
                                        project: this.props.project
                                    }
                                }}>
                                    <button type="button" className="btn btn-danger pull-right">
                                        <i className="fa fa-edit">&nbsp;</i>Edit</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ViewProjectAggregate;

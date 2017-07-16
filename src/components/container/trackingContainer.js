import React, { Component } from 'react';
import '../../styles/app.css';
import AppHeaderAggregate from '../appBar/appHeaderAggregate';
import UserMenuAggregate from '../appBar/userMenuAggregate';
import MenuAggregate from '../sideBar/menuAggregate';

class TrackingContainer extends Component {
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
        return (
            <div>
                <style>{css}</style>
                <nav className="navbar navbar-default navbar-static-top">
                    <AppHeaderAggregate />
                    <UserMenuAggregate />
                    <MenuAggregate />
                </nav>
                <div id="page-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="page-header">Tracking</h1>
                                                    <div className="panel panel-green">
                        <div className="panel-heading">Project Tracking</div>
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
                                <div className="col-md-12">
                                <div className="progress progress-striped active">
                                    <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" >
                                        <span className="sr-only">40% Complete (success)</span>
                                    </div>
                                </div>
                                </div>
                     <div className="table-responsive col-md-12">
                                <table className="table table-striped table-bordered table-hover">
                                    <thead>
                                        <tr>
                                            <th>Name</th>
                                            <th>Jan 2017</th>
                                            <th>Feb 2017</th>
                                            <th>Mar 2017</th>
                                            <th>Apr 2017</th>
                                            <th>May 2017</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Suresh</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0.5</td>
                                            <td>0.25</td>
                                        </tr>
                                        <tr>
                                            <td>Raju</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0.5</td>
                                            <td>0.25</td>
                                        </tr>
                                        <tr>
                                            <td>Sudha</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>0.5</td>
                                            <td>0.25</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrackingContainer;

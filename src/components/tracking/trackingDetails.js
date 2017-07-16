import React, { Component } from 'react';
import '../../styles/app.css';
import ProjectInfo from './projectInfo'
import MemberInfo from './memberInfo'
class TrackingDetails extends Component {
    render() {

        return (
            <div>

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
                                    {ProjectInfo}
                                </div>
                                <div className="table-responsive col-md-12">
                                    <MemberInfo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TrackingDetails;

import React, { Component } from 'react';
import '../../styles/app.css';
import AppHeaderAggregate from '../appBar/appHeaderAggregate';
import UserMenuAggregate from '../appBar/userMenuAggregate';
import MenuAggregate from '../sideBar/menuAggregate';

class DashboardContainer extends Component {
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
                                <h1 className="page-header">Dashboard</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardContainer;

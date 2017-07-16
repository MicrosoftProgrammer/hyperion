import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/app.css';
import SearchAggregate from './searchAggregate';


class MenuAggregate extends Component {

    render() {
        return (
            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <SearchAggregate />
                        <li>
                            <Link to="/"> <i className="fa fa-dashboard fa-fw"></i> Dashboard </Link>
                        </li>
                        <li>
                            <Link to="/project"> <i className="fa fa-list fa-fw"></i> Project Management </Link>
                        </li>
                        <li>
                            <Link to="/tracking"> <i className="fa fa-clock-o fa-fw"></i> Fixed Bit Traking </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default MenuAggregate;

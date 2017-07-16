import React, { Component } from 'react';
import '../../styles/app.css';

class SearchAggregate extends Component {

    render() {
        return (
            <li className="sidebar-search">
                <div className="input-group custom-search-form">
                    <input type="text" className="form-control" placeholder="Search..." />
                    <span className="input-group-btn">
                        <button className="btn btn-default" type="button">
                            <i className="fa fa-search"></i>
                        </button>
                    </span>
                </div>
            </li>
        );
    }
}

export default SearchAggregate;

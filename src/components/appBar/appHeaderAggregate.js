import React, { Component } from 'react';
import '../../styles/app.css';

class AppHeaderAggregate extends Component {

    render() {
        return (
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand">Management Pro</a>
            </div>
        );
    }
}

export default AppHeaderAggregate;

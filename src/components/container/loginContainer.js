import React, { Component } from 'react';
import '../../styles/app.css';
import Login from '../login/login';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types'

class LoginContainer extends Component {
    constructor(props) {
        super(props)
        this.LoggedIn = this.LoggedIn.bind(this);
    }

    LoggedIn() {
        if (typeof this.props.onLoggedIn === 'function') {
            this.props.onLoggedIn("Token");
        }
    }

    static contextTypes = {
        token: PropTypes.string
    }

    render() {
        if (this.context.token !== "") {
            return (<Redirect to="/" />);
        }
        else {
            return (
                <Login onLoggedIn={this.LoggedIn} />
            );
        }
    }
}

export default LoginContainer;

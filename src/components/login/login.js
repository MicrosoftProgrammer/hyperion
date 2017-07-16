import React, { Component } from 'react';
import '../../styles/app.css';
import TextBox from '../controls/textBox';

class Login extends Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (typeof this.props.onLoggedIn === 'function') {
            localStorage.setItem("token","Token");
            this.props.onLoggedIn("Token");
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="login-panel panel panel-default">
                            <div className="panel-heading">
                                <h3 className="panel-title">Please Sign In</h3>
                            </div>
                            <div className="panel-body">
                                <form data-abide onSubmit={this.handleSubmit}>
                                    <fieldset>
                                        <div className="form-group">
                                            <TextBox placeholder="E-mail" required={true} name="email" type="email" />
                                        </div>
                                        <div className="form-group">
                                            <TextBox placeholder="Password" required={true} name="password" type="password" />
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-success btn-block">Login</button>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

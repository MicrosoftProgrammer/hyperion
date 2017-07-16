import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component, token, ...rest }) => (
    <Route {...rest} render={(props) => (
        localStorage.getItem("token") !== null ?
            React.createElement(component, props)
            : (
                <Redirect to={{
                    pathname: '/login',
                    state: { from: props.location },
                }} />
            )
    )} />
);

export default PrivateRoute;

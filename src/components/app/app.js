import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import '../../styles/app.css';
import DashboardContainer from '../container/dashboardContainer';
import LoginContainer from '../container/loginContainer';
import TrackingContainer from '../container/trackingContainer';
import ProjectContainer from '../container/projectContainer';
import PrivateRoute from '../../routes/privateRoute';
import configureStore from '../../store/configureStore';
import ContextProvider from '../../store/contextProvider';
const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      token: ""
    }

    this.LoggedIn = this.LoggedIn.bind(this);
  }

  LoggedIn(token) {
    this.setState({
      token: token
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ContextProvider token={this.state.token}>
          <BrowserRouter>
            <div>
              <PrivateRoute exact token={this.state.token} path='/' component={DashboardContainer} />
              <PrivateRoute exact token={this.state.token} path='/tracking' component={TrackingContainer} />
              <PrivateRoute exact token={this.state.token} path='/project' component={ProjectContainer} />
              <Route path='/login'
                render={(props) => (
                  <LoginContainer {...props} onLoggedIn={this.state.token === "" ? this.LoggedIn : ""} />
                )} />
            </div>
          </BrowserRouter>
        </ContextProvider>
      </Provider>
    );
  }
}

export default App;

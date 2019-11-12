import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './app.route';
import NetworkInterceptor from '../services/interceptor/interceptor';
import * as redux from '../store/createStore';
import environments from '../environments/environments';

NetworkInterceptor.setupInterceptors(redux.store);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Provider store={redux.store}>
        <PersistGate loading={null} persistor={redux.persistor}>
          <Router basename={environments.APP_BASE_NAME}>
            <AppRoutes {...this.props} />
          </Router>
        </PersistGate>
      </Provider>
    );
  }
}

export default App;

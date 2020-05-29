import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import AppRoutes from './app.route';
import NetworkInterceptor from '../services/interceptor/interceptor';
import * as redux from '../store/createStore';
import environments from '../environments/environments';
import { darkTheme, lightTheme } from '../hoc/mui-theme/mui-theme';

NetworkInterceptor.setupInterceptors(redux.store);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      settings: { theme },
    } = this.props;
    return (
      <MuiThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <Router basename={environments.APP_BASE_NAME}>
          <AppRoutes {...this.props} />
        </Router>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = (state) => ({
  settings: { ...state.settings },
});

App.propTypes = {
  settings: PropTypes.object,
};

App.defaultProps = {
  settings: {},
};

export default connect(mapStateToProps, null)(App);

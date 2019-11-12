import React from 'react';
import ReactDOM from 'react-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import dotEnv from 'dotenv';
import * as serviceWorker from './serviceWorker';
import App from './app/app';
import './index.scss';

dotEnv.config();
const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  },
  palette: {
    primary: {
      main: '#209CEE',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ee4225',
      contrastText: '#ffffff'
    },
    default: {
      main: '#ffffff'
    },
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App muiTheme={theme} />
  </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

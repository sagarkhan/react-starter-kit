import React from 'react';
import ReactDOM from 'react-dom';
import dotEnv from 'dotenv';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import * as serviceWorker from './serviceWorker';
import App from './app/app';
import NetworkInterceptor from './services/interceptor/interceptor';
import * as redux from './store/createStore';
import './index.scss';

dotEnv.config();
NetworkInterceptor.setupInterceptors(redux.store);
window.store = redux.store;

ReactDOM.render(
  <Provider store={redux.store}>
    <PersistGate loading={null} persistor={redux.persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();

/* eslint-disable no-param-reassign */
import Axios from 'axios';
import {
  loader,
  errorHandler,
} from '../../store/common/actions/common.actions';

/* Loader Show/Hide logic */
let count = 0;
const showLoader = (store) => {
  store.dispatch(loader(true));
  count++;
};

const hideLoader = (store) => {
  if (count <= 1) {
    store.dispatch(loader(false));
    count = 0;
  } else {
    count--;
  }
};

/* Error Show/Hide logic */
const handleError = (store, err = null) => {
  if (err) {
    store.dispatch(errorHandler(err));
  }
};

/* Function to validate|prepare|modify error object */
const prepareErrorObject = (error) => {
  let err = error.response ? error.response.data : error;
  if (typeof err === 'object') {
    err.timestamp = Date.now();
    err.config = error.config;
  } else {
    err = {};
    err.message = 'Something went wrong.';
    err.timestamp = Date.now();
  }
  return err;
};

export default {
  setupInterceptors: (store) => {
    // Requests interceptor
    Axios.interceptors.request.use(
      (config) => {
        const { headers } = config;
        const { silent = true, errorHandling = true } = headers;
        config.errorHandling = errorHandling;
        if (!silent) showLoader(store);
        if (headers.silent) {
          delete headers.silent;
        }
        return config;
      },
      (error) => {
        hideLoader(store);
        if (error?.config?.errorHandling === false) {
          return Promise.reject(error);
        }
        handleError(store, error);
        return Promise.reject(error ? error['response'] : null);
      },
    );

    // Response interceptor
    Axios.interceptors.response.use(
      (response) => {
        const { data = {} } = response;
        hideLoader(store);
        if (data.status >= 400) {
          const err = prepareErrorObject(data);
          handleError(store, err);
        }
        return response;
      },
      (error) => {
        const err = prepareErrorObject(error);
        hideLoader(store);
        if (error?.config?.errorHandling === false) {
          return Promise.reject(error);
        }
        handleError(store, err);
        return Promise.reject(error ? error['response'] : null);
      },
    );
  },
};

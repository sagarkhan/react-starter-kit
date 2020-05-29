export function loader(action) {
  return {
    type: 'LOADER_VIEW',
    payload: action,
  };
}

export function errorHandler(error) {
  return {
    type: 'ERROR_HANDLER',
    payload: error,
  };
}

/**
 * Show Snackbar alert
 * @param {{ message, severity = 'success' | 'error' | 'warning' | 'info' }} snackbar
 */
export const showSnackbar = (snackbar) => ({
  type: 'SNACKBAR',
  payload: snackbar,
});

export const hideSnackbar = () => ({
  type: 'SNACKBAR',
  payload: { show: false },
});

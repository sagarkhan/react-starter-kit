const errorConfigs = {
  401: {
    message: 'Unauthorized or token expired',
  },
  403: {
    message: 'You are not authorized to perform this operation',
  },
  default: {
    message:
      'There was an error performing this operation. Please try again later.',
  },
};

export default errorConfigs;

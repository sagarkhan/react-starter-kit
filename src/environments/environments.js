const dev = {
  BASE_URL: '',
};

const prod = {
  BASE_URL: '',
};

const uat = {
  BASE_URL: '',
};

const currentEnv = process.env.REACT_APP_STAGE || 'local';
let activeEnvironment = {};

switch (currentEnv.toLowerCase()) {
  case 'dev':
    activeEnvironment = {
      ...dev,
    };
    break;
  case 'uat':
    activeEnvironment = {
      ...uat,
    };
    break;
  case 'prod':
    activeEnvironment = {
      ...prod,
    };
    break;
  default:
    activeEnvironment = {
      ...dev,
    };
    break;
}

const environments = {
  ...activeEnvironment,
};

export default environments;

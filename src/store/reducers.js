import { combineReducers } from 'redux';
import CommonReducer from './common/reducers/common.reducers';

const rootReducers = combineReducers({
  common: CommonReducer
});

export default rootReducers;

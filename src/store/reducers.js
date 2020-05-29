import { combineReducers } from 'redux';
import CommonReducer from './common/reducers/common.reducers';
import SettingsReducer from './common/reducers/settings.reducer';

const rootReducers = combineReducers({
  common: CommonReducer,
  settings: SettingsReducer,
});

export default rootReducers;

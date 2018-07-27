import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  // short hand property names
  global: globalReducer,
  modal: modalReducer,
});

export default rootReducer;

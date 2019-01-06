import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import modalReducer from './modalReducer';

const rootReducer = combineReducers({
  global: globalReducer,
  modal: modalReducer,
});

export default rootReducer;

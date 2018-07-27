import * as types from '../actions/actionsTypes';
import initialState from './initialState';

const globalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT:
      return {
        ...state,
        counter: action.counter + 1,
      };
    case types.DECREMENT:
      return {
        ...state,
        counter: action.counter - 1,
      };
    default:
      return state;
  }
};

export default globalReducer;

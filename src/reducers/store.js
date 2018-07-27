import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

const history = createBrowserHistory();

let customMiddleware = applyMiddleware(routerMiddleware(history));
if (process.env.NODE_ENV !== 'production') {
  customMiddleware = applyMiddleware(routerMiddleware(history), logger);
}

const store = createStore(
  connectRouter(history)(rootReducer), // new root reducer with router state
  customMiddleware,
);

export { store, history };

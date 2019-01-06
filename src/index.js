import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connectRouter } from 'connected-react-router';
import './index.css';
import App from './App';
import { store, history } from './reducers/store';
import rootReducer from './reducers/rootReducer';

import registerServiceWorker from './registerServiceWorker';

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App history={history} />
    </Provider>,
    document.getElementById('root'),
  );
};

render();
registerServiceWorker();

// Hot reloading
if (module.hot) {
  // Reload components
  module.hot.accept('./App', () => {
    render();
  });

  // Reload reducers
  module.hot.accept('./reducers/rootReducer', () => {
    store.replaceReducer(connectRouter(history)(rootReducer));
  });
}

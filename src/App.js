import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'react-jss';
import { ConnectedRouter } from 'connected-react-router';
import Layout from './containers/LayoutContainer';
import routes from './routes';

const theme = {
  color: {
    primary: '#61da00',
    secondary: '#61dafb',
    white: '#ffffff',
    black: '#000000',
    button: '#f65b54',
    disabled: '#cccccc',
    textDisabled: '#757575',
  },
  spacing: '1rem',
};

const App = ({ history }) => (
  <ThemeProvider theme={theme}>
    <ConnectedRouter history={history}>
      <Layout>
        { routes }
      </Layout>
    </ConnectedRouter>
  </ThemeProvider>
);

App.propTypes = {
  history: PropTypes.object.isRequired,
};

export default App;

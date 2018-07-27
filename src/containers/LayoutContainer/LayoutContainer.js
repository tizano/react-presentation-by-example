import React from 'react';
import PropTypes from 'prop-types';
import Navbar from '../../components/Navbar';

const LayoutContainer = ({ children }) => (
  <div className="App">
    <Navbar />
    <main>
      {children}
    </main>
  </div>
);

LayoutContainer.propTypes = {
  children: PropTypes.object.isRequired,
};

export default LayoutContainer;

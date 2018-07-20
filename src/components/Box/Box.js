import React from 'react';
import PropTypes from 'prop-types';

const Box = ({
  title, bgColor, padding, children,
}) => (
  <div
    style={{
      backgroundColor: bgColor,
      padding,
    }}
  >
    <h2>
      { title }
    </h2>
    { children }
  </div>
);

Box.defaultProps = {
  bgColor: '#f65b54',
  padding: '1rem',
  children: false,
};

Box.propTypes = {
  title: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  padding: PropTypes.node,
  children: PropTypes.node,
};

export default Box;

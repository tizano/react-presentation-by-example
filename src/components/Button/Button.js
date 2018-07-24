import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  className, text, bgColor, padding, margin, ...props
}) => (
  <div style={{ margin }}>
    <button
      style={{ backgroundColor: bgColor, padding }}
      className={['fancy', className].join(' ')}
      {...props}
    >
      {text}
    </button>
  </div>
);

Button.defaultProps = {
  bgColor: '#61da00',
  className: {},
  margin: '1rem',
  padding: '1rem',
};


Button.propTypes = {
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default Button;

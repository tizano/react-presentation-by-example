import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  myButton: {
    padding: props => ((props.padding) ? props.padding : '1rem'),
    backgroundColor: props => props.bgColor,
  },
};

const Box = ({
  classes, title, children,
}) => (
  <div
    className={classes.myButton}
  >
    <h2>
      { title }
    </h2>
    { children }
  </div>
);

Box.defaultProps = {
  children: false,
};

Box.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default injectSheet(styles)(Box);

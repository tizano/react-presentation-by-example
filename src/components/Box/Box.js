import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = theme => ({
  box: {
    margin: theme.spacing,
    padding: props => ((props.padding) ? props.padding : theme.spacing),
    backgroundColor: props => ((props.bgColor) ? props.bgColor : theme.color.primary),
    boxShadow: '0px 10px 20px -2px rgba(80, 91, 109, 0.2)',
    '&:before': {
      content: 'azeadq',
    },
  },
});

const Box = ({
  classes, title, children,
}) => (
  <div
    className={classes.box}
  >
    <h2>
      { title }
    </h2>
    { children }
    <em>Fait avec du JSS</em>

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

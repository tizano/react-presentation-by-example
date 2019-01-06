import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import injectSheet from 'react-jss';
import * as modalAction from '../../actions/modalAction';

const styles = {
  floatingBtn: {
    fontSize: '1.2rem',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    display: 'inline-block',
    textAlign: 'center',
    fontWeight: 'bold',
    padding: '1rem 2rem',
    border: '3px solid #FF0072',
    backgroundColor: 'transparent',
    color: '#FF0072',
    borderRadius: 3,
    position: 'relative',
    margin: '.5em',
    boxShadow: '0 2px 10px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.1)',
    transition: '0.3s ease all',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#ff0072',
      color: '#ffffff',
    },
  },
};

class FloatingButtonContainer extends Component {
  state = {
    clicked: 0,
  };

  handleClick = (event) => {
    event.preventDefault();
    this.setState((prevState) => {
      // eslint-disable-next-line
      console.log("Listener sur le clique, on change l'etat du clique");
      return { clicked: prevState.clicked + 1 };
    });
    this.props.showModal();
  }

  render() {
    const {
      children, margin, classes,
    } = this.props;

    const { clicked } = this.state;

    return (
      <Fragment>
        <div style={{ margin }}>
          <button
            className={classes.floatingBtn}
            onClick={this.handleClick}
          >
            { children }
          </button>
          {clicked > 0 &&
            <div>Tu viens de cliquer {clicked} fois</div>
          }
        </div>
      </Fragment>
    );
  }
}

FloatingButtonContainer.defaultProps = {
  children: false,
  margin: '1rem',
};

FloatingButtonContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
  margin: PropTypes.string,
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(modalAction.showModal()),
});

const FloatingButton = connect(null, mapDispatchToProps)(FloatingButtonContainer);

export default injectSheet(styles)(FloatingButton);

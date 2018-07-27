import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as modalAction from '../../actions/modalAction';

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
      bgColor, children, margin, padding,
    } = this.props;

    const { clicked } = this.state;

    return (
      <Fragment>
        <div style={{ margin }}>
          <button
            style={{ backgroundColor: bgColor, padding }}
            onClick={this.handleClick}
          >
            { children }
          </button>
          {clicked > 0 &&
            <span>Tu viens de cliquer {clicked} fois</span>
          }
        </div>
      </Fragment>
    );
  }
}

FloatingButtonContainer.defaultProps = {
  bgColor: '#f65b54',
  children: false,
  margin: '1rem',
  padding: '1rem',
};

FloatingButtonContainer.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
  showModal: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  showModal: () => dispatch(modalAction.showModal()),
});

const FloatingButton = connect(null, mapDispatchToProps)(FloatingButtonContainer);

export default FloatingButton;

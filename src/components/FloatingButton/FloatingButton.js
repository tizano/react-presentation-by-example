import React, { Component } from 'react';
import PropTypes from 'prop-types';

class FloatingButton extends Component {
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
  }

  render() {
    const {
      bgColor, children, margin, padding,
    } = this.props;

    const { clicked } = this.state;

    return (
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
    );
  }
}

FloatingButton.defaultProps = {
  bgColor: '#f65b54',
  children: false,
  margin: '1rem',
  padding: '1rem',
};

FloatingButton.propTypes = {
  bgColor: PropTypes.string,
  children: PropTypes.node,
  margin: PropTypes.string,
  padding: PropTypes.string,
};

export default FloatingButton;

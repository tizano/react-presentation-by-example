import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';

const StyledButton = styled.button`
  position: relative;
  z-index: 1;
  padding: .8rem 1.5rem;
  border: 0;
  border-radius: 3px;
  font-size: 1.1rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${props => props.theme.color.button};
  color: ${props => props.theme.color.white};
  transition: all .2s ease;
  &:hover {
    transition: all .2s ease;
    background-color: ${props => props.theme.color.textDisabled};
  }
`;

const DisabledButton = StyledButton.extend`
  background-color: ${props => props.theme.color.disabled};
  color: ${props => props.theme.color.textDisabled};
  cursor: not-allowed;
`;

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

const Button = ({
  text, disabled, ...props
}) => (
  <ThemeProvider theme={theme}>
    <div style={{ margin: theme.spacing }}>
      {disabled ?
        <DisabledButton disabled>
          {text}
        </DisabledButton> :
        <StyledButton {...props}>
          {text}
        </StyledButton>
      }
    </div>
  </ThemeProvider>
);

Button.defaultProps = {
  disabled: false,
  theme: {
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
  },
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  theme: PropTypes.object,
};

export default Button;

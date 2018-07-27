import React, { Component, Fragment } from 'react';

class InputText extends Component {
  state = {
    inputValue: '',
  }
  handleChange = (event) => {
    this.setState({
      inputValue:
      event.target.value,
    });
  }
  render() {
    // eslint-disable-next-line
    const { inputValue } = this.state;
    return (
      <Fragment>
        <input
          id="input"
          type="text"
          onChange={this.handleChange}
        />
        {inputValue !== '' &&
          <span style={{ display: 'block' }}>{`Valeur de l'input : ${inputValue}`}</span>
        }
      </Fragment>
    );
  }
}

export default InputText;

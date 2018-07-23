import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loader/react.json';

class LoaderReact extends Component {
  state = {
    isStopped: false,
    isPaused: false,
  };

  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };

    return (
      <div>
        Loader React
        <Lottie
          options={defaultOptions}
          height={110}
          width={110}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LoaderReact;

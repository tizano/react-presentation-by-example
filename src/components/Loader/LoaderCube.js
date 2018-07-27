import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loader/animation-w800-h600.json';

class LoaderCube extends Component {
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
        <Lottie
          options={defaultOptions}
          height={180}
          width={180}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LoaderCube;

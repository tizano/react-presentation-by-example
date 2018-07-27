import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loader/heart_with_particles.json';

class LoaderHeart extends Component {
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
          height={140}
          width={140}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LoaderHeart;

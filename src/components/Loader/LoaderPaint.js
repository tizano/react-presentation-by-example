import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loader/splashy_loader.json';

class LoaderPaint extends Component {
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
        Loader Paint
        <Lottie
          options={defaultOptions}
          height={80}
          width={80}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default LoaderPaint;

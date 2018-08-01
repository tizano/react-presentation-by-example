import React, { Component } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../assets/loader/404.json';
import './NotFound.css';

class NotFound extends Component {
  state = {
    isStopped: false,
    isPaused: false,
    size: window.innerWidth - 60,
  };

  componentDidMount() {
    this.changeSize();
    window.addEventListener('resize', this.changeSize.bind(this));
  }

  /**
   * Remove event listener
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.changeSize.bind(this));
  }

  changeSize = () => {
    if (window.innerWidth > 992) {
      this.setState({ size: 980 });
    } else {
      this.setState({ size: window.innerWidth - 60 });
    }
  }

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
      <div className="not-found">
        <Lottie
          options={defaultOptions}
          height={this.state.size}
          width={this.state.size}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    );
  }
}

export default NotFound;

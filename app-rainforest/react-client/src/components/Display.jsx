import React, { Component } from 'react';
import Photo from './Photo.jsx';
import VideoPlayer from './VideoPlayer.jsx';

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = { }
    this.mouseOver = this.mouseOver.bind(this);
    this.mouseOut = this.mouseOut.bind(this);
  }

  mouseOver() {
    this.props.showZoomView();
  }

  mouseOut() {
    this.props.hideZoomView();
  }

  render() {
    if (this.props.displayed) {
      return (
        <span className='Display' onMouseOver={this.mouseOver} onMouseOut={this.mouseOut}>
          <img width='420' height='420' src={this.props.image}></img>
        </span>
      );
    } else {
      return (
        <span></span>
      );
    }
  }
}

export default Display;
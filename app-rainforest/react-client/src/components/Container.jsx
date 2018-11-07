import React, { Component } from 'react';
import Photo from './Photo.jsx';

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  renderContainer() {
    if (this.props.images !== null) {
      return (
        <span className='Container'>
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[0]} />
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[1]} />
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[2]} />
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[3]} />
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[4]} />
          <Photo view={this.props.showDisplay} setDisplay={this.props.setDisplay} image={this.props.images[5]} />
          <Photo view={this.props.showVideo} setDisplay={() => { }} image={'data:image/jpeg;base64,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'} />
        </span>
      );
    } else {
      return <span></span>
    }
  }

  render() {
    return (
      <span>{this.renderContainer()}</span>
    );
  }
}

export default Container;
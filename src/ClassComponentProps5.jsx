import React, { Component } from 'react';

class ClassComponentProps5 extends Component {
  render() {
    return (
      <img src={this.props.src} alt={this.props.alt} />
    );
  }
}

export default ClassComponentProps5;
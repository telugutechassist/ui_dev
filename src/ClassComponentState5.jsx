import React, { Component } from 'react';

class ClassComponentState5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    };
  }

  handleInputChange = event => {
    this.setState({
      inputValue: event.target.value
    });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
        <p>Input value: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default ClassComponentState5;

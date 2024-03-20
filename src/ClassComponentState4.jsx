import React, { Component } from 'react';

class ClassComponentState4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: ''
    };
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
   
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={this.handleInputChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          placeholder="Email"
        />
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.handleInputChange}
          placeholder="Message"
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ClassComponentState4;

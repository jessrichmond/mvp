import React, { Component } from 'react';

class Post extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    alert('working submit');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default Post
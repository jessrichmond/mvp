import React, { Component } from 'react';

class Entry extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const entries = this.props.haikus.map((entry) => {
      return <div>{entry.message}</div>
    })
    return (
      <div>{entries}</div>
    )
  }
}

export default Entry
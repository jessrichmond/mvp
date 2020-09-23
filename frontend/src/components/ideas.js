import React, { Component } from 'react';

class Ideas extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const ideas = this.props.options.map((idea) => {
      return <div>{idea.word}</div>
    })

    return (
      <div>{ideas}</div>
    )
  }
}

export default Ideas
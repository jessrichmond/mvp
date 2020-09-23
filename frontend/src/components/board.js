import React, { Component } from 'react';

class Board extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { onLoad } = this.props;
    onLoad();
  }

  listEntries() {
    const { haikus } = this.props.state;
  }

  render() {
    return (
      <div className="board">
        <h1>hi haiku </h1>
        <button onClick={this.handleClick} type="button">show me show me</button>
      </div>
    )
  }
}

export default Board
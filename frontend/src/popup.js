import React, { Component } from 'react'

class PopUp extends Component {
  handleClick() {
    this.props.toggle();
  }

  render() {
    return(
      <div className="modal">
        <div className="modal_content">
          <span className="close" onClick={this.handleClick}>&times;</span>
          <p>I'm a poop up</p>
        </div>
      </div>
    )
  }
}

export default PopUp;
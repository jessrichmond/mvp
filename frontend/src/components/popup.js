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
          <form><h4>say something</h4>
          <input type="submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default PopUp;
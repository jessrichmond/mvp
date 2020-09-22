import React, { Component } from 'react';
import Board from './board'
import Post from './post'

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      seen: false
    }

    this.togglePop = this.togglePop.bind(this);
  }


  togglePop() {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return(
      <div>
        <div className="Header">BULLETIN / signup or login / post to board</div>
        <div className="Board"><Board /></div>
        <div className="button" onClick={this.togglePop}>
          <button>LOG IN</button>
        </div>
        {this.state.seen ? <PopUp toggle={this.togglePop} /> : null}
        <div className="Post"><Post /></div>
      </div>
    // <h1>HELLO SQUIRREL</h1>
    )
  }
}

export default App;
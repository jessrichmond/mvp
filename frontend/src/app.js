import React, { Component } from 'react';
import Board from './board'
import Post from './post'

class App extends Component{
  render() {
    return(
      <div className="Homepage">
        <div className="Header">BULLETIN / signup or login / post to board</div>
        <div className="Board"><Board /></div>
        <div className="Post"><Post /></div>
      </div>
    // <h1>HELLO SQUIRREL</h1>
    )
  }
}

export default App;
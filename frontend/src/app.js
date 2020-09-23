import React, { Component } from 'react';
import Board from './components/board'
import Post from './components/post'
import WordSearch from './components/wordSearch'

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
        <div className="Post"><Post /></div>
        <div className="WordSearch"><WordSearch /></div>
      </div>
    )
  }
}

export default App;
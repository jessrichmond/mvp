import React, { Component } from 'react';
import Board from './components/board'
import Post from './components/post'
import Entry from './components/entry'
import WordSearch from './components/wordSearch'
import axios from 'axios'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      haikus: [],
      visible: false
    }
    this.onLoad = this.onLoad.bind(this);
    this.toggleList = this.toggleList.bind(this);
  }

  onLoad() {
    axios.get('/home')
      .then((res) => {
        this.setState({haikus: res.data})
      })
  }

  toggleList() {
    this.setState({
      visible: !this.state.visible
    })
  }


  render() {
    return(
      <div>
        <div className="Board"><Board onLoad={this.onLoad} toggleList={this.toggleList} /></div>
        <div className="Entry"><Entry haikus={this.state.haikus}/></div>
        <div className="Post"><Post /></div>
        <div className="WordSearch"><WordSearch /></div>
      </div>
    )
  }
}

export default App;
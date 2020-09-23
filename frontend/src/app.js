import React, { Component } from 'react';
import Board from './components/board'
import Post from './components/post'
import Entry from './components/entry'
import WordSearch from './components/wordSearch'
import Ideas from './components/ideas'
import axios from 'axios'


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      haikus: [],
      options: []
    }
    this.loadEntries = this.loadEntries.bind(this);
    this.loadOptions = this.loadOptions.bind(this);
  }

  loadEntries() {
    axios.get('/home')
      .then((res) => {
        this.setState({haikus: res.data})
      })
  }

  loadOptions(value) {
    const query = value.replace(/ /g, '+');
    axios.get('https://api.datamuse.com/words', {
      params: {
        ml: query,
        max: 20
      }
    })
    .then((res) => {
      this.setState({options: res.data});
    })
    .catch(function (error) {
      console.log(error)
    })
  }

  render() {
    return(
      <div>
        <div className="Board"><Board loadEntries={this.loadEntries} /></div>
        <div className="Entry"><Entry haikus={this.state.haikus}/></div>
        <div className="Post"><Post /></div>
        <div className="WordSearch"><WordSearch loadOptions={this.loadOptions}/></div>
        <div className="Ideas"><Ideas options={this.state.options} /></div>
      </div>
    )
  }
}

export default App;
import React, { Component } from 'react';
const axios = require('axios');
const syllable = require('syllable');

class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      options: '',
      displayList: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  };

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSearch(event) {
    const query = this.state.value.replace(/ /g, '+');
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

    event.preventDefault();

  }


  render() {

    return (
      <div>
        <form onSubmit={this.handleSearch}><br />
          <label><b>help me find a word describing...</b></label><br />
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><input type="submit" value="Submit" /> <br />
        </form>
      </div>
    )
  }
}

export default WordSearch
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

  handleSearch() {
    const query = this.state.value.replace(/ /g, '+');
    axios.get('https://api.datamuse.com/words', {
      params: {
        ml: query,
        max: 20
      }
    })
    .then((res) => {
      const options = res.data;
      this.setState({ options });
      this.setState({displayList: !displayList})
    })
    .catch(function (error) {
      console.log(error)
    })

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <label>need help finding the right word? what are you trying to describe?</label>
          <input type="textarea" value={this.state.value} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        {/* <ul>
          {this.state.options.map(option => <li>{option.word}</li>)}
        </ul> */}
      </div>
    )
  }
}

export default WordSearch
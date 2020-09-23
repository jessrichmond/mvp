import React, { Component } from 'react';
const axios = require('axios');
const syllable = require('syllable');

class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({value: event.target.value})
  }

  handleClick() {
    const { loadOptions } = this.props;
    loadOptions(this.state.value);
  }

  render() {
    return (
      <div>
        <form><br />
          <label><b>help me find a word describing...</b></label><br />
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <br /><button onClick={this.handleClick} type="button">search</button><br />
        </form>
      </div>
    )
  }
}

export default WordSearch
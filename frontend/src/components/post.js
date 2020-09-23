import React, { Component } from 'react';
const axios = require('axios');
const syllable = require('syllable');

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value})
  }

  handleSubmit(event) {
    const syllableCount = syllable(this.state.value);
    if (syllableCount === 17) {
      // post to database
      axios.post('/add', {
        message: this.state.value
      })
      .then(() => console.log('haiku posted'))
      .catch(() => console.log('error posting haiku'))
    } else if (syllableCount < 17) { // if syllable count is less than or greater than
      // you need x more syllables; find an addition here
      // find a word to substitute
    } else if (syllableCount > 17) {
      // you need x fewer syllables; take some out or find a substitute here
      // find a word to substitute
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            do a little dance make a little (haiku)
            <input type="textarea" value={this.state.haikuValue} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default Post
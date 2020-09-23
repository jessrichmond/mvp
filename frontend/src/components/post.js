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
    } else if (syllableCount < 17) {
      const difference = 17 - syllableCount;
      alert(`you need ${difference} more syllables!`)
    } else if (syllableCount > 17) {
      const difference = syllableCount - 17;
      alert(`you need ${difference} fewer syllables!`)
    }

    event.preventDefault();

  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}><br />
          <label><b>do a little dance</b></label><br />

            <textarea value={this.state.value} onChange={this.handleChange} /><br />
          <input type="submit" value="Submit" /><br />
        </form>
      </div>
    )
  }
}

export default Post
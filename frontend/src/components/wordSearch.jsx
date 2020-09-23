import React, { Component } from 'react';

class WordSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  };

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleClick() {
    const { loadOptions } = this.props;
    loadOptions(this.state.value);
  }

  render() {
    return (
      <div>
        <form>
          <h4><b>help me find a word describing...</b></h4>
          <input type="text" onChange={this.handleChange} />
          <button onClick={this.handleClick} type="button">search</button>
          <br />
        </form>
      </div>
    );
  }
}

export default WordSearch;

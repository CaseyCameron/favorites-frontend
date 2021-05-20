import React, { Component } from 'react';
import './GiphySearch.css';

export default class GiphySearch extends Component {
  state = {
    search: ''
  }

  handleChange = ({ target }) => {
    this.setState({ search: target.value });
  }

  handleSubmit = e => {
    const { onSearch } = this.props;
    e.preventDefault();
    onSearch(this.state.search);
  }

  render() {
    const { search } = this.state;
    return (
      <form className="GiphySearch" onSubmit={this.handleSubmit}>
        <input value={search} onChange={this.handleChange} />
        <button>🔎</button>
      </form>
    );
  }
}

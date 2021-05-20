import React, { Component } from 'react';
import './GifItem.css';

const RED_HEART = '❤️';
const WHITE_HEART = '♡';

export default class GifItem extends Component {
  state = {
    isFavorite: false
  }

  handleFavoriteClick = e => {
    const { gif, onFavorited } = this.props;
    e.preventDefault();
    onFavorited(gif);
    this.setState({ isFavorite: !this.state.isFavorite });
  }

  render() {
    const { gif } = this.props;
    return (
      <li className="GifItem">
        <img src={gif.gif} alt="giphy"/>
        <button className="fav-button" onClick={this.handleFavoriteClick}>
          {this.state.isFavorite ? WHITE_HEART : RED_HEART}
        </button>
      </li>
    );
  }
}

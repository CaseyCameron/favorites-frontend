import React, { Component } from 'react';
import GifItem from './GifItem';
import './GifList.css';

export default class GifList extends Component {
  render() {
    const { gifs, onFavorited } = this.props;

    return (
      <ul className="GifList">
        {gifs.map(gif => (
          <GifItem key={gif.giphyId} gif={gif} onFavorited={onFavorited} />
        ))}
      </ul>
    );
  }
}

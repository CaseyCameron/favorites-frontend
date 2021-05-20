import React, { Component } from 'react';
import GifItem from './GifItem';

export default class GifList extends Component {
  render() {
    const { gifs, onFavorited } = this.props;
    console.log(gifs);
    return (
      <ul className="GifList">
        {gifs.map(gif => (
          <GifItem key={gif.gifId} gif={gif} onFavorited={onFavorited} />
        ))}
      </ul>
    );
  }
}

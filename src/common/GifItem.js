import React, { Component } from 'react';
import { link } from 'react-router-dom';
import './GifItem.css';

export default class GifItem extends Component {
  render() {
    const { gif } = this.props;
    return (
      <li className="GifItem">
        <img src={gif.gif} />
      </li>
    );
  }
}

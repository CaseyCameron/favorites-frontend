import React, { Component } from 'react';
import GifList from '../common/GifList';
import GiphySearch from './GiphySearch';
import { getGifs } from '../utils/utils.js';

export default class GiphyPage extends Component {

  state = {
    gifs: [],
    favorites: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleSearch = async search => {
    try {
      this.setState({ loading: true });
      //const { favorites } = this.state;
      const gifs = await getGifs(search);
      this.setState({ gifs: gifs });
    }
    catch (err) {
      console.log(err.message);
    }
    finally {
      this.setState({ loading: false });
    }
  }

  handleFavorited = async gif => {

  }



  render() {


    return (
      <div className="GiphyPage">
        <GiphySearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} />
      </div>
    );
  }
}

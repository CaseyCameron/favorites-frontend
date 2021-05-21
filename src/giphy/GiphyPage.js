import React, { Component } from 'react';
import GifList from '../common/GifList';
import GiphySearch from './GiphySearch';
import { addFavorite, getGifs, getMyFavorites, removeFavorite } from '../utils/utils.js';

export default class GiphyPage extends Component {

  state = {
    gifs: [],
    favorites: [],
    loading: false
  }

  async componentDidMount() {
    try {
      this.setState({ loading: true });

      const favorites = await getMyFavorites();
      this.setState({ favorites: favorites });
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
    try {
      if (!gif.id) {
        // if not favorited (doesn't have an id), then add it as a favorite
        const addedFavorite = await addFavorite(gif);

        const updatedGifs = this.state.gifs.map(g => {
          return g.giphyId === addedFavorite.giphyId ? addedFavorite : g;
        });

        this.setState({ gifs: updatedGifs });

      } else {
        // if it's already favorited, remove it from favorites
        const removed = await removeFavorite(gif.id);

        const updatedGifs = this.state.gifs.map(g => {
          return g.id === removed.id ? {
            giphyId: '',
            preview: '',
            gif: '',
            url: ''
          } : g;
        });

        this.setState({ gifs: updatedGifs });
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }

  render() {
    return (
      <div className="GiphyPage">
        <GiphySearch onSearch={this.handleSearch} />
        <GifList gifs={this.state.gifs} onFavorited={this.handleFavorited} />
      </div>
    );
  }
}

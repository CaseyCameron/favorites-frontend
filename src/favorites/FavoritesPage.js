import React, { Component } from 'react';
import GifList from '../common/GifList';
import { getMyFavorites, addFavorite, removeFavorite } from '../utils/utils.js';

export default class FavoritesPage extends Component {
  state = {
    favorites: []
  }

  async componentDidMount() {
    try {
      const favorites = await getMyFavorites();
      console.log(favorites);
      this.setState({ favorites: favorites });
    }
    catch (err) {
      console.log(err.message);
    }
  
  }

  handledFavorited = async favorite => {
    try {
      
      if (favorite.deleted) {
        const { favorites } = this.state;
        const newFavorite = await addFavorite(favorite);
        const updatedFavorites = favorites.map(f => {
          return f.id === favorite.id ? newFavorite : f;
        });
        this.setState({ favorites: updatedFavorites });
      }
      else {
        await removeFavorite(favorite.id);
        favorite.deleted = true;
      }
    }
    catch (err) {
      console.log(err.message);
    }
  }
  
  render() {
    const { favorites } = this.state;
    return (
      <div className="FavoritesPage">
        <GifList gifs={favorites} onFavorited={this.handledFavorited}/>
      </div>
    );
  }
}

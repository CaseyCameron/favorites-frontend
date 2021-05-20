import React, { Component } from 'react';
import GifList from '../common/GifList';

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
      const { favorites } = this.state;


      
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
      <div>
        <GifList/>
      </div>
    );
  }
}

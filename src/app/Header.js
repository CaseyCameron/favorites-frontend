import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() { 
    return (
      <header className="Header">

        <h1>React App</h1>

        <Link to="/favorites">Favorites</Link>
        <Link to="/gifs">Search Gifs</Link>
        
      </header>
    );
  }

}
 
export default Header;
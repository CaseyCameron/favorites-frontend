import { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

class Header extends Component {

  render() {
    return (
      <header className="Header">

        <h1>Gifrenzy</h1>
        <nav>
          <Link to="/favorites">Favorites</Link>
          <Link to="/gifs">Search</Link>
        </nav>
      </header>
    );
  }

}

export default Header;
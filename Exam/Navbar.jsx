import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    // Redirect to a search results page with the search query
    navigate(`/search?query=${searchQuery}`);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">Delicious Smell</div>
        <ul className="nav-links">
          <li className="navbar-item">
            <Link to="/" className="navbar-link">
              Home
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/add" className="navbar-link">
              Add Product
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/about" className="navbar-link">
              About Us
            </Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact" className="navbar-link">
              Contact Us
            </Link>
          </li>
          <li className="navbar-item">
            <form className="search-form" onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-input"
              />
              <button type="submit" className="search-button">
                Search
              </button>
            </form>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;

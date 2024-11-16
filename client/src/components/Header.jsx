import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Researcher's Guide: Bachelor's Level</h1>
      <nav className="header-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/resources" className="nav-link">Resources</Link>
        <Link to="/about" className="nav-link">About</Link>
      </nav>
    </header>
  );
};

export default Header;

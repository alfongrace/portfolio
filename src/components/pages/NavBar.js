import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/App.css';

function Header() {
  return (
    <header style={{ marginTop: '40px', padding: '35px', textAlign: 'center', borderRadius: '12px' }}>
      <nav>
        <ul style={{ fontFamily: 'Arial, sans-serif', listStyleType: 'none', display: 'flex', gap: '20px' }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
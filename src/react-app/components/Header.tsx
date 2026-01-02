import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-content">
        <a href="/"><h1 className="logo">neko314's Portfolio</h1></a>
      </div>
    </header>
  );
};

export default Header;

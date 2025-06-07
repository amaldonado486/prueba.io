import React from 'react';
import headerImage from '../assets/Header.jpg';
import '../Header.css';

const Header = () => (
  <div className="header-container" style={{ backgroundImage: `url(${headerImage})`}}>
    <h1 className="header-title">Pizzería Mamma Mia</h1>
    <p className="header-subtitle">¡Tenemos las mejores pizzas que podrás encontrar!</p>
  </div>
);

export default Header;


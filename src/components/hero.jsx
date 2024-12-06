import React from 'react';
import './hero.css'
import hero from '../assets/hero.png';

const HeroSection = () => {

  return (
    <div className="hero-section">
      <img src={hero}  alt="Hero Image" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to My website </h1>
        <p>This is an awesome website created with react </p>
        <h3>Created by Montaha Mekni </h3>
      </div>
    </div>
  );
};

export default HeroSection;

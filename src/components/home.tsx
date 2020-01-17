import React from 'react';
import logo from '../assets/hypnotoad.gif';

const HomePage: React.FC = () => {
    return (
      <div className="App">
          <header role="banner" className="App-header">
            <img src={logo} className="image-cropper" alt="logo" />
            <p>
              All hail the hypnotoad!
            </p>
          </header>
      </div>
    )
  };


export default HomePage;
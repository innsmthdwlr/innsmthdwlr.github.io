import React from 'react';
// import logo from './logo.svg';
import logo from './hypnotoad.gif';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="image-cropper" alt="logo" />
        <p>
          All hail the hypnotoad!
        </p>
      </header>
    </div>
  );
}

export default App;

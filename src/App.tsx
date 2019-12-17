import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import DiabetesPage from './components/diabetes';
import HomePage from './components/home';

const App: React.FC = () => {
  
  return (
    <HashRouter basename='/'>
      <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/hidoc' component={DiabetesPage} />
      </div>
      <nav className='App-hidden'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            <Link to='/hidoc'>Diabetes</Link>
          </li>
        </ul>
      </nav>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import './App.css';
import DiabetesPage from './components/diabetes';
import HomePage from './components/home';
import Whoami from './components/whoami';

const App: React.FC = () => {
  
  return (
    // <HomePage />
    <HashRouter basename='/'>
      <main role="main">
          <Route exact path='/' component={HomePage} />
          <Route path='/whoami' component={Whoami} />
          <Route path='/hidoc' component={DiabetesPage} />
      </main>
      <nav role="navigation">
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/whoami'>whois innsmthdwlr</Link>
          </li>
          <li>
            <Link to='/hidoc'>Hi, Doc!</Link>
          </li>
        </ul>
      </nav>
    </HashRouter>
  );
}

export default App;
import React, {useState} from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import logo from './assets/hypnotoad.gif';
import './App.css';
import Day from './components/day';

interface Day
{
  "date": string; 
  "meals": { 
    "time": string; 
    "image": string; 
    "description": string; 
    "noTag": number;
    "measurements": { 
      "time": string; 
      "value": number; 
    }[]; 
  }[]; 
}

const DiabetesPage: React.FC = () => {
  
  const todayDate = new Date();
  const todayFormatted = todayDate.getFullYear() + '-' + (todayDate.getMonth()+1) + '-' + todayDate.getDate();
  
  const [searchTerm, setSearchTerm] = useState(todayFormatted);
  const [searchResults, setSearchResults] = React.useState<Array<Day>>([]);
  const [jsonData, setJsonData] = useState({});
  const [loadingRepo, setloadingRepo] = useState(true);
  const [searchResultChanged, setSearchResultChanged] = useState(true);

  const handleChange = (event: any) => 
  {
    setSearchTerm(event.target.value);
    setSearchResultChanged(true);
  }
  const url = 'https://dl.dropboxusercontent.com/s/ct056h9skhev9ro/registry.json';

  React.useEffect(() => {
    if(loadingRepo){
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setJsonData(data);
        setloadingRepo(false);
      });
    };

    if(!loadingRepo && searchResultChanged){
      const results = (jsonData as any).days.filter( function (day:Day) {
        return day.date === searchTerm;
      });
      setSearchResults(results);
      setSearchResultChanged(false);
    }
  }, [loadingRepo, searchResultChanged]);

  return (
    <div>
      <h1>Blood glucose levels</h1>
      <div className='datepicker'>
        <span>Pick a date: </span>
        <input type="date" name="dateFilter" onChange={handleChange} value={searchTerm} />
      </div>
      <div>
      {
        searchResults.map( (day:any, i:number) => <Day day={day} key={i} />)
      }
      </div>
    </div>
  );
}

const HomePage: React.FC = () => (
    <div className="App">
        <header className="App-header">
          <img src={logo} className="image-cropper" alt="logo" />
          <p>
            All hail the hypnotoad!
          </p>
        </header>
    </div>
);


const App: React.FC = () => {
  
  return (
    <HashRouter basename='/'>
      <div>
          <Route exact path='/' component={HomePage} />
          <Route path='/hidoc' component={DiabetesPage} />
      </div>
      <div className='App-hidden'>
        <Link to='/'>Home</Link>
        <Link to='/hidoc'>Diabetes</Link>
      </div>
    </HashRouter>
  );
}

export default App;

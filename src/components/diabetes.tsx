import React, {useState} from 'react';
import Day from './day';
import {IDay} from './day';

const DiabetesPage: React.FC = () => {
  
    const todayDate = new Date();
    const todayFormatted = todayDate.getFullYear() + '-' + (todayDate.getMonth()+1) + '-' + todayDate.getDate();
    
    const [searchTerm, setSearchTerm] = useState(todayFormatted);
    const [searchResults, setSearchResults] = React.useState<Array<IDay>>([]);
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
        const results = (jsonData as any).days.filter( function (day:IDay) {
          return day.date === searchTerm;
        });
        setSearchResults(results);
        setSearchResultChanged(false);
      }
    }, [jsonData, loadingRepo, searchResultChanged, searchTerm]);
  
    return (
      <div>
        <h1>Blood glucose levels</h1>
        <section>
        <div className='datepicker'>
          <label>
            Pick a date: 
            <input type="date" name="dateFilter" onChange={handleChange} value={searchTerm} />
          </label>
        </div>
        </section>
        <div>
        {
          searchResults.map( (day:IDay, i:number) => <Day key={i} date={day.date} meals={day.meals} />)
        }
        </div>
      </div>
    );
  }

  export default DiabetesPage;
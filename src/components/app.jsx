import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import WeatherDescription from './weather-description.jsx';
import { HistoryBtn } from './history-btn.jsx';
import { getWeather } from '../services/get-weather.js';
import { SearchHistory } from './search-history.jsx';

export function App() {
  const dispatch = useDispatch();
  const isHistory = useSelector(state => state.isModalActive);
  const lastCity = useSelector(state => state.lastCity);

  return (
    <div className="weather-container">
      <div className="weather-container__header">
        <input 
          className="entry-field" 
          type="text" 
          placeholder={lastCity ? lastCity : 'Enter city...'} 
          onBlur={ (event) => dispatch(getWeather(event)) }
          onKeyUp={ (event) => {if (event.key === 'Enter') event.target.blur() } }
        />
        <HistoryBtn />  
      </div>

      <WeatherDescription />
      {(isHistory) && <SearchHistory />}
    </div>
  );
}

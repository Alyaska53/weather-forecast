import React from "react";
import ReactDOM from "react-dom";
import './styles/owfont-regular.css';
import './styles/index.css';

class HistoryBtn extends React.Component {
  render() {
    return <button className="history-btn">History</button>
  }
}

class WeatherDescription extends React.Component {
  render() {
    const weather = this.props.weather;

    return (
      <div className="weather-container__description">
        <i className={"weather-icon owf " + weather.icon}></i>
        <div className="weather-error">{weather.error}</div>
        <div>
          <span className="temperature">{weather.temperature}</span>
          <span className="description"> {weather.description}</span>
        </div>
        <div className="humidity">{weather.humidity}</div>
        <div className="wind-speed">{weather.windSpeed}</div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      icon: '',
      temperature: '',
      description: '',
      humidity: '',
      windSpeed: '',
      error: '',
    }
  }

  getWeatherDescription(data) {
    this.setState({
      icon: `owf-${data.weather[0].id}`,
      temperature: `${Math.floor(data.main.temp)}°C`,
      description: data.weather[0].description,
      humidity: `Humidity: ${Math.floor(data.main.humidity)}%`,
      windSpeed: `Wind speed: ${Math.floor(data.wind.speed)} m/s`,
      error: '',
    });
  }

  getError(city) {
    this.setState({
      icon: '',
      temperature: '',
      description: '',
      humidity: '',
      windSpeed: '',
      error: `Error! City no found for '${city}'`,
    });
  }

  async getWeather(event) {
    const city = event.target.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=6826903bd88db4c68c638b46c695e538&units=metric`;

    try {
      const result = await fetch(url);
      const data = await result.json();

      this.getWeatherDescription(data);
    } catch(e) {
      this.getError(city);
    }
  }

  render() {
    return (
      <div className="weather-container">
        <div className="weather-container__header">
          <input 
            className="entry-field" 
            type="text"  
            onChange={(event) => this.getWeather(event)}
          />
          <HistoryBtn />  
        </div>

        <WeatherDescription weather={this.state}/>
      </div>
    );
  }
}

// ==========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
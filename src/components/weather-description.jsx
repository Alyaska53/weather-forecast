import { connect } from "react-redux";

function WeatherDescription({weather}) {
  if (!weather.city) {
    return (
      <div className="weather-container__description">
        <div>Enter city please</div>
      </div>
    );
  }
  
  if (weather.error) {
    return (
      <div className="weather-container__description">
        <div>{weather.error}</div>
      </div>
    );
  }
  
  return (
    <div className="weather-container__description">
      <i className={'weather-icon owf ' + weather.icon}></i>
      <div>
        <span>{weather.temperature}</span>
        <span>{' ' + weather.description}</span>
      </div>
      <div>{'Humidity: ' + weather.humidity}</div>
      <div>{'Wind speed: ' + weather.windSpeed}</div>
    </div>
  );
}

const mapStateToProps = state => ({
  weather: state.weather,
  isModalActive: state.isModalActive,
});

export default connect(mapStateToProps)(WeatherDescription);
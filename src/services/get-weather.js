import { addWeatherToHistory } from "../store/action-creators/add-weather-to-history";
import { enterCity } from "../store/action-creators/enter-city";

export function getWeather(event) {
  const city = event.target.value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=en&appid=6826903bd88db4c68c638b46c695e538&units=metric`;

  return dispatch => {
    fetch(url)
      .then(response => response.json())
      .then(json => {
        dispatch(enterCity(json, city));
        dispatch(addWeatherToHistory());
      });
  }
}
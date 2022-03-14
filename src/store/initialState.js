const history = localStorage.weatherHistory ? JSON.parse(localStorage.weatherHistory) : [];
const weather = sessionStorage.weather ? JSON.parse(sessionStorage.weather) : {};
const lastCity = sessionStorage.lastCity ? sessionStorage.lastCity : 'Enter city...';

export const initialState = {
  lastCity: lastCity,
  weather: weather,
  isModalActive: false,
  modalType: 'history',
  history: history,
};
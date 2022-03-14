export function getWeatherDescription(data, city) {
  let result = (data.cod === 200) ? true : false;

  const weatherDescription = {
    city: result ? data.name : city,
    icon: result ? `owf-${data.weather[0].id}` : '',
    temperature: result ? `${Math.floor(data.main.temp)}°C` : '',
    description: result ? data.weather[0].description : '',
    humidity: result ? `${Math.floor(data.main.humidity)}%` : '',
    windSpeed: result ? `${Math.floor(data.wind.speed)} m/s` : '',
    error: result ? '' : `Error! City no found for '${city}'`,
  };

  sessionStorage.setItem('weather', JSON.stringify(weatherDescription));
  sessionStorage.setItem('lastCity', result ? weatherDescription.city : '');

  return weatherDescription;
}
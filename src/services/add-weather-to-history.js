import { getDate } from "./getDate";

export function addWeatherToHistory(history, weather) {
  if (weather.error) {
    return history;
  }

  delete weather.error;

  const now = Date.now();
  weather.id = now;

  const date = getDate(now);

  if (!history.length || history[history.length - 1].date !== date) {
    history.push({
      id: now,
      date: date,
      dayHistory: [weather],
    });
  } else {
    history[history.length - 1].dayHistory.push(weather);
  }

  localStorage.setItem('weatherHistory', JSON.stringify(history));

  return history;
}
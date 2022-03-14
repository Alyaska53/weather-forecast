import { fastSort } from "../services/fastSort";
import { getTime } from "../services/getTime";

export function DayHistory(props) {
  const dayHistory = fastSort(props.dayHistory);

  return (
    <main className="day-history-list">
      {
        dayHistory.map((weather, i) => 
          <div className="day-history-list__city-row" key={i}>
            <div>{getTime(weather.id)}</div>
            <div>{weather.city}</div>
            <div className={'city-row-icon owf ' + weather.icon}></div>
            <div>{weather.description}</div>
            <div>{weather.temperature}</div>
            <div>{'Humidity: ' + weather.humidity}</div>
            <div>{'Wind speed: ' + weather.windSpeed}</div>
          </div>
        )
      }
    </main>
  );
}
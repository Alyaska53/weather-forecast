import { useSelector } from "react-redux";
import { fastSort } from "../services/fastSort";
import { DayHistory } from "./day-history";

export function HistoryList() {
  const history = fastSort(useSelector(state => state.history));

  return (
    <div className="search-history-container__list">
      {
        (history.length)
        ?
        history.map((el, i) => 
          <div className="day-history-container" key={i}>
            <header className="day-history-header">{el.date}</header>
            <DayHistory dayHistory={el.dayHistory} />
          </div>
        )
        :
        <div className="history-empty">History is empty</div>
      }
    </div>
  );
}
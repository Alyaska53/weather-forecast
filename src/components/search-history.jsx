import { useDispatch } from "react-redux";
import { closeHistory } from "../services/close-history";
import { HistoryList } from "./history-list";

export function SearchHistory() {
  const dispatch = useDispatch();

  return (
    <div className="overlay" onClick={(event) => closeHistory(event, dispatch)}>
      <div className="search-history-container">
        <div className="search-history-container__header">
          <div className="search-history-title">History of weather forecasts</div>
          <div className="close-btn" onClick={(event) => closeHistory(event, dispatch)}></div>
        </div>

        <HistoryList />
      </div>
    </div>
  );
}
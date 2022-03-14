import { useDispatch } from "react-redux";
import { openSearchHistory } from '../store/action-creators/open-search-history';

export function HistoryBtn() {
  const dispatch = useDispatch();

  return <button className="history-btn" onClick={() => dispatch(openSearchHistory())}>History</button>;
}
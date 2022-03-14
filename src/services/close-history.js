import { closeSearchHistory } from "../store/action-creators/close-search-history";

export function closeHistory(event, dispatch) {
  const target = event.target; 
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');
   
  if (target === overlay || target === closeBtn) {
    dispatch(closeSearchHistory());
  }
}
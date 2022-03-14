import { CLOSE_SEARCH_HISTORY } from "../actions/actionTypes";

export function closeSearchHistory() {
  return {
    type: CLOSE_SEARCH_HISTORY,
  };
}
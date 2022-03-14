import { addWeatherToHistory } from "../../services/add-weather-to-history";
import { ADD_WEATHER_TO_HISTORY, CLICK_HISTORY_BUTTON, CLOSE_SEARCH_HISTORY, ENTER_CITY } from "../actions/actionTypes";
import { initialState } from "../initialState";

export function reducer(state = initialState, action) {
  switch(action.type) {
    case ENTER_CITY: {
      return {
        ...state,
        weather: action.weather,
        lastCity: action.weather.city,
      }
    }
    
    case CLICK_HISTORY_BUTTON: {
      return {
        ...state,
        isModalActive: true,
        modalType: 'history',
      }
    }

    case CLOSE_SEARCH_HISTORY: {
      return {
        ...state,
        isModalActive: false,
        modalType: '',
      }
    }

    case ADD_WEATHER_TO_HISTORY: {
      return {
        ...state,
        history: addWeatherToHistory(state.history, state.weather),
      }
    }

    default: return state;
  }
}
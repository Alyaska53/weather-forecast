import { getWeatherDescription } from "../../services/get-weather-description";
import { ENTER_CITY } from "../actions/actionTypes";

export function enterCity(json, city) {
  return {
    type: ENTER_CITY,
    weather: getWeatherDescription(json, city),
  }
}
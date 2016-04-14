import axios from 'axios';
import { API_KEY } from '../config';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`; // us is static value of usa. Some point make this app searching cities globally
  const request = axios.get(url);
  
  return {
    type: FETCH_WEATHER,
    payload: request // The promise is returned as a payload
  };
}


// axions return a promise. Promise wont actually contain yet any data.
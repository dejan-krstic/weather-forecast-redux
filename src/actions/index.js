import axios from "axios";

import { API_KEY } from "../constants/apiKey";
import { API_URL } from "../constants/apiUrl";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city, countryCode) => {
    const url = `${API_URL}${city},${countryCode}&appid=${API_KEY}`;
    const response = axios.get(url);
    return {
        type: FETCH_WEATHER,
        payload: response
    };
}
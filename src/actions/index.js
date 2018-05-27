import axios from "axios";

import { API_KEY } from "../constants/apiKey";
import { API_URL } from "../constants/apiUrl";

export const FETCH_WEATHER = "FETCH_WEATHER";

export const fetchWeather = (city, countryCode) => {
    const url = `${API_URL}${API_KEY}&q=${city}${countryCode}`;

    let payload = axios.get(url)
        .catch(error => {
            if(error.response.status === 400){
                alert("Please enter a valid city name.");
            } else if(error.response.status === 404){
                console.log(error);
                console.log(error.response);

                alert("We couldn't find a city with that name. Please try again.");
            } else {
                alert("Oops! An error has ocurred! Please try again.");
                }
            })
        
    return {
        type: FETCH_WEATHER,
        payload
    };
}
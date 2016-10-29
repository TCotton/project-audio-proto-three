import axios from 'axios';
const API_KEY = 'cc5273075ce8b12e4670051489bbc65b';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

//q=London,gb&mode=xml& || q=London,gb&mode=json&

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city = 'London') {

	const url = `${ROOT_URL}&q=${city},gb`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};

}